---
title: "Hello World: Welcome to My Blog"
date: 2026-03-13
draft: false
tags: []
math: true
summary: "A first post to kick things off — with some code and math to test the setup."
---

Welcome to my blog! I'll be writing about AI research, systems engineering, and whatever else catches my attention.

## Why a Blog?

I've been meaning to write more about the things I work on. This space will be a mix of technical deep dives, paper reviews, and notes from the trenches of building AI systems.

## A Quick Test Drive

Here's some Python to make sure syntax highlighting works:

```python
import torch
import torch.nn as nn

class SimpleAttention(nn.Module):
    def __init__(self, d_model: int):
        super().__init__()
        self.query = nn.Linear(d_model, d_model)
        self.key = nn.Linear(d_model, d_model)
        self.value = nn.Linear(d_model, d_model)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        q, k, v = self.query(x), self.key(x), self.value(x)
        scores = torch.matmul(q, k.transpose(-2, -1)) / (q.size(-1) ** 0.5)
        return torch.matmul(torch.softmax(scores, dim=-1), v)
```

And some math — the scaled dot-product attention formula:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

Where $d_k$ is the dimension of the key vectors. The scaling factor $\frac{1}{\sqrt{d_k}}$ prevents the dot products from growing too large.

## What's Next

Stay tuned for posts on:
- LLM inference optimization
- Retrieval-augmented generation patterns
- Notes from recent papers

More soon!
