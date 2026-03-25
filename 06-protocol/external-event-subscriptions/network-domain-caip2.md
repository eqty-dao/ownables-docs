# Network Domain (CAIP-2)

External event references must be scoped to explicit network domains using CAIP-2 style identifiers.

Example:

- `eip155:8453` for Base mainnet.

## Protocol requirement

When a subscription expects a specific network, events from any other network must be rejected.

This prevents accidental or malicious mixing of testnet and mainnet data.
