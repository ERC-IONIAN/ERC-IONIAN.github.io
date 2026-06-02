---
title: "GATA2Floor — Accepted at ICIP 2026"
date: 2026-05-01
description: "Can one model count floors on any building — even without labels? Our GATA2Floor paper has been accepted at IEEE ICIP 2026."
video: /videos/GATA2FloorClip.mp4
authors:
  - name: Ngoc Tan Le
    url: https://scholar.google.com/citations?user=ONfpzkMAAAAJ&hl=en
  - name: Tzoulio Chamiti
    url: https://scholar.google.com/citations?user=Jn5SnMihQ-YC&hl=en
  - name: Eirini Papagiannopoulou
  - name: Nikos Deligiannis
    url: https://scholar.google.com/citations?user=iUGMLcYAAAAJ&hl=en
---

Can one model count floors on any building — even without labels?

Street-view data — either capturing from autonomous, mapping vehicles or urban camera networks — smart cities, urban computing, graph neural networks, … if any of that is your world, this work is for you.

At **Vrije Universiteit Brussel**, **ETRO VUB**, and **imec**, in the context of the **Flanders AI Research Program / Vlaams AI Onderzoeksprogramma** and the **European Research Council (ERC)**, **Project #IONIAN**, we designed **GATA2Floor** — a multi-head GATv2 architecture that models each facade as a vertical-aware graph and jointly performs floor counting and soft window-to-floor assignment. Done in collaboration with **paradigm.brussels** and **FARI - AI for the Common Good Institute**.

The motivation is simple: floors are a vertical story, but detectors treat windows as isolated boxes and clustering breaks on irregular layouts. We bake the vertical prior into the graph and the attention, so the model reasons about structure, not pixels.

We achieved:

- Up to **86% accuracy** on Amsterdam facades and **90% on ECP**, outperforming clustering baselines and a ResNet50 classifier on floor counting,
- Interpretable per-element floor assignment — not just a number, but which window belongs to which floor with confidence,
- A **label-free proposal pipeline** (DINOv2 + GMM + VLM) that sustains performance on cities with zero annotated data.

Built for city-scale SVI so this work can be directly applicable to smart-city analytics, autonomous-driving stacks, and any pipeline already capturing street views at scale.

Accepted at **#ICIP2026**, see you all in Finland this September! 🎉

📄 Paper: [arxiv.org/abs/2605.11863](https://arxiv.org/abs/2605.11863)

---

I'm presenting my paper at the **2026 IEEE International Conference on Image Processing (ICIP)**! Join me in Tampere, Finland, from 13–17 September 2026. [Register here](https://invt.io/1fxbocjw1th)

[![ICIP 2026 — Tampere, Finland](/images/icip2026_banner.png)](https://invt.io/1fxbocjw1th)
