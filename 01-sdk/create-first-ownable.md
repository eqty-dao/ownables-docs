# Create First Ownable

There are two practical ways to create your first Ownable in `ownables-sdk`.

## Path A: Import a local package zip

1. Build examples if needed:

```bash
cd ../ownables-sdk
yarn ownables:build
```

2. In the wallet UI, open the action panel and choose `Upload`.
3. Select a zip from `ownables/*.zip`.
4. Select the imported package from the package list to instantiate it.

## Path B: Create via Builder

1. In the action panel, choose `Ownable Builder`.
2. Fill in name, description, and image.
3. Confirm wallet prompts if payment or signing is requested by the selected network flow.
4. Wait for the upload request to complete.

Use Path A for local development and reproducible testing. Use Path B for guided package creation flows.
