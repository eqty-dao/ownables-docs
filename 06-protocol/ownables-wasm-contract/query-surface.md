# Query Surface

The contract must expose enough data for independent verification.

Typical query surfaces include:

- current chain head and state references
- immutable subscription specification
- admitted external event records and references

Wallet and verifier rely on this query surface to run deterministic reconciliation.
