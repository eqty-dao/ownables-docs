# Operations

## Operational basics

- Run with explicit environment-based policy config.
- Log every approval, rejection, and reason.
- Keep key material isolated and rotate on schedule.
- Monitor ownership mismatch and reconciliation failures.

## Incident response

On repeated verification mismatches:

1. Pause affected flow.
2. Capture chain snapshots and event references.
3. Re-run deterministic reconciliation.
4. Resume only after root cause is known.
