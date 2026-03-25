# Transfer and Consume

Ownables support lifecycle actions that may include transfer and consumption.

## Transfer

A transfer changes authority to another owner. In hybrid mode, transfer authority must align with NFT ownership state.

## Consume

Consumption means the asset can no longer be used in the same way. This is modeled as an event-driven state transition, not only a movement between addresses.

## Practical checklist

- Validate caller authority.
- Validate external ownership context when required.
- Emit lifecycle event.
- Persist and sync resulting chain state.
