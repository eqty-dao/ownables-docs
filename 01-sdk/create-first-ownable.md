# Create First Ownable

## Goal

Create and initialize one Ownable from local files with the browser builder.

## Steps

1. Prepare files and metadata.
2. Build package and get CID.
3. Build instantiate message.
4. Deploy through adapter.

```ts
import { prepareOwnable, buildInstantiateMsg, deploy } from "@ownables/builder";

const prepared = await prepareOwnable({
  name: "Demo Ownable",
  description: "First Ownable",
  files,
  packageService,
});

const instantiateMsg = buildInstantiateMsg({
  name: "Demo Ownable",
  description: "First Ownable",
  packageCid: prepared.packageCid,
  networkId: "eip155:8453",
});

const result = await deploy(adapter, {
  wasm,
  instantiateMsg,
  expectedCodeHash,
});
```

After deploy, store the Ownable id and package CID together.
