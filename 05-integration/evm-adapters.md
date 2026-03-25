# EVM Adapters

Use adapters to bridge Ownables runtime with EVM context.

Packages:

- `@ownables/adapter-viem`
- `@ownables/adapter-ethers`

Main service exported by both:

- `EQTYService`
- `MockEQTYService`

Use `MockEQTYService` in deterministic tests and local development where real chain calls are not required.
