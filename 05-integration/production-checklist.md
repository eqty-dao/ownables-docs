# Production Checklist

- Pin exact package versions.
- Enforce chain id and CAIP-2 network checks.
- Monitor reconciliation failures and invalid chain flags.
- Keep deterministic ordering based on `(blockNumber, transactionIndex, logIndex)`.
- Separate signing keys from user-facing infrastructure.
- Version and document subscription specs.
- Test lock/unlock edge cases in hybrid mode.
