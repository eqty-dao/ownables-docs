# External Ownable Event

`external_ownable_event` records an admitted event originating from another Ownable domain.

## Required network domain

Event carries required CAIP-2 network identifier, for example `eip155:8453`.

## Admission conditions

- Source domain matches configured subscription.
- Network id matches exactly.
- Event reference and payload satisfy schema and policy.

Network mismatch must be rejected to prevent cross-network contamination.
