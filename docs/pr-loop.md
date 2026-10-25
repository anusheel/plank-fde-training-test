# Day 1: the PR loop, timed

Deployed to Vercel (preview per PR, production on main). Then ran the loop from a Linear ticket to a merged PR, repeatedly.

| Run | Ticket | Open → merged |
| --- | --- | --- |
| 1 | WB-1 page title | 11m |
| 2 | WB-2 footer | 7m |
| 3 | WB-3 health route | 6m |
| 4 | WB-4 eslint rule | 5m |
| 5 | WB-5 README badge | 4m |

11 merged in the hour. The bottleneck was CI install time; cached npm fixed it.
