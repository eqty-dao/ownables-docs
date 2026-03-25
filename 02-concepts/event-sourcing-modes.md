# Event Sourcing Modes

Ownables support three event sourcing modes.

## Public-only mode

Source of truth is Base events only, usually NFT logs.

## Private-only mode

Source of truth is the Ownable event chain only. This is the current base model.

## Hybrid mode

Ownership context comes from Base while behavior stays in private event chain. Locking is required to keep ownership and execution authority aligned.
