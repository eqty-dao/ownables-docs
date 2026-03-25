# Installation

## Requirements

- Node.js 20+
- Package manager: `npm`, `yarn`, or `pnpm`
- Access to Base RPC endpoint
- A wallet account for signing

## Core packages

```bash
npm install @ownables/core @ownables/builder
npm install @ownables/platform-browser @ownables/adapter-viem
```

For Node backends:

```bash
npm install @ownables/platform-node
```

For ethers-based EVM integration:

```bash
npm install @ownables/adapter-ethers
```

## Optional notify packages

```bash
npm install @ownables/notify-core @ownables/notify-client @ownables/notify-publisher
```

## Verify install

Run your TypeScript build and verify imports resolve.

```ts
import { OwnableService } from "@ownables/core";
import { prepareOwnable } from "@ownables/builder";
```
