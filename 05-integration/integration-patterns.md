# Integration Patterns

## Pattern 1: Wallet-first local execution

- Execute Ownable logic in client runtime.
- Keep local chain copy and reconcile external events.
- Best for user-driven workflows.

## Pattern 2: Backend-assisted verification

- Wallet performs actions.
- Backend performs independent reconciliation and health checks.
- Best for regulated or high-assurance products.

## Pattern 3: Event-driven ingestion worker

- Worker listens for external events.
- Submits admissible events through contract entrypoints.
- Wallet still performs final chain validity checks.
