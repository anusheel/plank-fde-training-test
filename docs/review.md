# Review-driven development

Every PR gets `/review` before a human looks at it. Three sub-agents run in parallel (correctness, security, product), each read-only, each with its own context. Findings land as a single comment. Humans review the findings, not the diff.

First run on WB-6: 2 real bugs found (missing null check on invoice amount, unredacted log line), 1 false positive.
