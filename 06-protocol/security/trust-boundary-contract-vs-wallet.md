# Trust Boundary (Contract vs Wallet)

## Contract

- Enforces static admission rules.
- Stores and serves protocol data.

## Wallet and verifier

- Fetch external logs from Base.
- Reconstruct expected external event set.
- Validate ordering and completeness.
- Mark Ownable chain invalid on mismatch.

This split is deliberate. It keeps contract logic bounded and keeps full verification where complete context exists.
