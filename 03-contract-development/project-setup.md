# Project Setup

## Baseline structure

- Contract crate with instantiate, execute, query handlers.
- Shared message schema generated from ownable-std types.
- Test suite with execution and verification cases.

## Setup goals

- Reproducible builds.
- Deterministic message schema.
- Clear separation between admission checks and business logic.
