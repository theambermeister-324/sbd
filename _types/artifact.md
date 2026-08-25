---
name: artifact
description: "A ks-make-produced branded deliverable filed into the KB"
match:
  path_glob: "outputs/**/*.md"
fields:
  title:
    type: string
    required: true
  artifact:
    type: string
    required: true
  date:
    type: date
    required: true
  generated_by:
    type: string
    required: true
  account:
    type: string
  source:
    type: string
  category:
    type: string
  outcome:
    type: enum
    values: [shipped, won, lost, internal, dropped, draft]
  grade:
    type: enum
    values: [strong, ok, needs-work]
  edited_pct:
    type: number
  feedback:
    type: string
---

Branded deliverables produced by ks-make. Graded so the KB learns which artifacts landed.
