# Installation

`ownables-sdk` is a development kit for Ownables. It includes the Ownables SDK wallet as a web application and a local setup to build Ownables packages.

The SDK wallet is used to connect a wallet account, import or create Ownables, run widget actions, and manage transfer, lock, and consume flows. The same repository also contains Ownable projects under `ownables/` and build tooling that produces zip packages from those projects.

## Requirements

- Node.js 20+
- Yarn 4
- Rust toolchain and `wasm32-unknown-unknown` target if you want to build Ownables locally

## Install steps

Clone and install in `../ownables-sdk`.

```bash
cd ../ownables-sdk
yarn install
```

If you plan to build Ownables from source:

```bash
yarn rustup
yarn ownables:build
```

This builds Ownables in the `ownables/` workspace and generates package zips like `ownables/*.zip` that you can import in the wallet.

## Running the SDK wallet

```bash
cd ../ownables-sdk
yarn start
```

Open the local URL printed by Vite.

### Environment variables

You can specify the hub and Base endpoint via the `.env` file.

If you want to host the SDK wallet, rather than running it on localhost, you'll need to [obtain a WalletConnect project ID](https://walletconnect.network/) and set `VITE_WALLETCONNECT_PROJECT_ID`. 

