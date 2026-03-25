# Ordering and Replay

Deterministic replay is mandatory.

## Private event order

Private events are ordered by chain linkage through `previous` hash.

## External event order

When external events are admitted, order is determined by:

- `blockNumber`
- `transactionIndex`
- `logIndex`

Timestamps are not authoritative for ordering.

## Replay guarantee

Given the same chain history and same admitted external event set, all compliant implementations must compute the same resulting state.
