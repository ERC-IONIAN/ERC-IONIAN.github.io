import fs from 'node:fs';
import path from 'node:path';

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  links: { paper?: string; project?: string; code?: string };
  type: 'journal' | 'conference' | 'thesis';
}

function parseMarkdownPubs(
  md: string,
  type: Publication['type'],
): Publication[] {
  const pubs: Publication[] = [];
  // Split by numbered list items: "1. ...", "2. ...", etc.
  const entries = md.split(/^\d+\.\s+/m).filter((s) => s.trim());

  for (const entry of entries) {
    // Flatten to single line
    const text = entry.replace(/\n/g, ' ').trim();

    // Extract links like [ArXiv](url), [Paper](url), [Project](url), [Code](url), [GitHub](url)
    const links: Publication['links'] = {};
    const linkRegex =
      /\\\[?\[?(ArXiv|Paper|Project|Code|GitHub)\]\((https?:\/\/[^\s)]+)\)/gi;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(text)) !== null) {
      const label = linkMatch[1].toLowerCase();
      const url = linkMatch[2];
      if (label === 'arxiv' || label === 'paper') links.paper = url;
      else if (label === 'project') links.project = url;
      else if (label === 'code' || label === 'github') links.code = url;
    }

    // Extract title (text between ** **)
    const titleMatch = text.match(/\*\*(.+?)\*\*/);
    const title = titleMatch ? titleMatch[1] : '';

    // Extract authors (everything before the first **). Strip markdown
    // escapes (e.g. "\*" → "*") so equal-contribution markers render right.
    const authorsRaw = text.split('**')[0].replace(/,\s*$/, '').trim();
    const authors = authorsRaw.replace(/\\([*_])/g, '$1');

    // Extract year (last 4-digit year matching 19xx or 20xx) — strip URL
    // contents first, otherwise arXiv ids like "2010.06425" get matched as
    // year 2010.
    const textNoUrls = text.replace(/\(https?:\/\/[^\s)]+\)/g, '');
    const yearMatches = textNoUrls.match(/\b((?:19|20)\d{2})\b/g);
    const year = yearMatches ? yearMatches[yearMatches.length - 1] : '';

    // Extract venue (text between title and year, roughly)
    let venue = '';
    const afterTitle = text.split('**').slice(2).join('**');
    // Clean out link markup
    const cleanAfter = afterTitle
      .replace(/\\\[?\[?(?:ArXiv|Paper|Project|Code|GitHub)\]\([^)]+\)/gi, '')
      .trim();
    // Extract italic venue — handle both *...* and _..._ markdown syntax.
    const venueMatch = cleanAfter.match(/([*_])(.+?)\1/);
    if (venueMatch) venue = venueMatch[2];

    if (title) {
      pubs.push({ authors, title, venue, year, links, type });
    }
  }

  return pubs;
}

export function getAllPublications(): Publication[] {
  const dataDir = path.resolve('src/data');
  const journal = fs.readFileSync(
    path.join(dataDir, 'pub_journal.md'),
    'utf-8',
  );
  const conference = fs.readFileSync(
    path.join(dataDir, 'pub_conference.md'),
    'utf-8',
  );
  const theses = fs.readFileSync(path.join(dataDir, 'pub_theses.md'), 'utf-8');

  return [
    ...parseMarkdownPubs(conference, 'conference'),
    ...parseMarkdownPubs(journal, 'journal'),
    ...parseMarkdownPubs(theses, 'thesis'),
  ];
}

export function getPublicationsForMember(memberName: string): Publication[] {
  const all = getAllPublications();
  const nameLower = memberName.toLowerCase();
  // Also try last name only for matching
  const parts = memberName.split(' ');
  const lastName = parts[parts.length - 1].toLowerCase();

  return all.filter((pub) => {
    const authorsLower = pub.authors.toLowerCase();
    return authorsLower.includes(nameLower) || authorsLower.includes(lastName);
  });
}
