---
title: "Neural Rate-Adaptive LDPC Decoding for the Slepian-Wolf Problem — Journal Accepted"
date: 2026-04-01
description: "Can one AI model decode all LDPCA rates? Our neural rate-adaptive Slepian–Wolf decoder based on a single multi-rate Transformer is accepted in IEEE Open Journal of Signal Processing."
authors:
  - name: Brent De Weerdt
    url: https://scholar.google.com/citations?user=XeNH99QAAAAJ&hl=en
  - name: Nikos Deligiannis
    url: https://scholar.google.com/citations?user=iUGMLcYAAAAJ&hl=en
---

Can one AI model decode all LDPCA rates?

If you're working on learned compression, neural distributed source coding, or learned channel coding, this might be of interest. At **Vrije Universiteit Brussel**, **ETRO VUB**, and **imec**, in the context of the **European Research Council (ERC)** **Project #IONIAN** and the **Research Foundation Flanders - FWO** PhD Aspirant of **Brent De Weerdt**, we designed a rate-adaptive neural Slepian–Wolf decoder based on a single multi-rate Transformer. The motivation is simple: in real distributed systems, correlation changes — so fixed-rate Slepian-Wolf coding leaves performance on the table.

We achieved:

- Up to **11% better compression** than belief propagation for binary Slepian–Wolf coding
- Up to **15× faster decoding** than belief propagation on GPU
- Integration into Wyner–Ziv designs for a distributed stereo image coding pipeline with **9–19% rate reduction** at low rates

![Proposed Transformer-based Neural Slepian-Wolf Decoder architecture](/images/neural_ldpc_diagram.png)

📄 Paper: [lnkd.in/exV6scGa](https://lnkd.in/exV6scGa)

🧪 Code: [lnkd.in/e2QvcCvg](https://lnkd.in/e2QvcCvg)

---

#SignalProcessing #DistributedSourceCoding #SlepianWolf #WynerZiv #LDPC #NeuralDecoding #Transformers #Compression #EdgeAI #VUB #ETRO #imec #ERC #FWO #IONIAN #OpenScience
