# In-Browser Builder

The browser builder is the primary path for preparing and deploying Ownables in modern integrations.

## Why this flow

- No upload-first dependency.
- Reproducible package preparation in client context.
- Direct deploy orchestration through configured adapter.

## Builder API surface

- `prepareOwnable(input)`
- `buildInstantiateMsg(input, packageCid, networkId, nft?)`
- `estimateCost(...)`
- `deploy(adapter, params)`

## Good practices

- Show package CID to users before final deploy.
- Keep metadata explicit and deterministic.
- Version package templates in source control.
