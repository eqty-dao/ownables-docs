# Ownables Documentation

**Ownables are stateful, event-driven assets with ownership and behavior.**

Ownables are programmable digital assets that represent not just ownership, but also behavior and lifecycle. Instead of static tokens, they are entities with their own event chain where actions like creation, transfer, and consumption are recorded.

Key differences from classic NFTs/ERC20:

- Ownables live in your wallet on your device, not on-chain or in the cloud.
- Ownership, state, and history are all first-class.
- The bundle contains attached files and an interactive widget.
- Assets can be consumed or transformed based on events, not only transferred.
- Ownable events can be private, public, or hybrid.

## Key concepts

### Ownable package

An Ownable starts as a package, typically distributed as a zip. The package contains a WASM contract, assets, and metadata. You can see the package as the blueprint of the Ownable.

When an Ownable is instantiated, an event chain is added to the package to create an Ownable bundle. The chain provides stateful information to the Ownable, such as the current owner.

### WASM contract

An Ownable is built around a WASM smart contract. The contract defines rules and execution logic.

State changes happen by applying events. The contract can process [public events from EVM blockchains](https://docs.soliditylang.org/en/latest/contracts.html#events) and private events using the EQTY event chain.

Information is read through queries. The Ownables protocol defines query patterns used by wallet and verifier components.

### Widget

The widget is an interactive visual interface of an Ownable. It is built with HTML, CSS, and JavaScript.

The widget runs in a sandboxed frame inside the wallet. It is driven by Ownable state only through the widget-state query and cannot rely on outside information or internet access.

### Event chain

The event chain is a microledger. Each event references the previous event, so history is ordered and tamper-evident.

The event chain is central because:

- it records lifecycle history,
- it enables deterministic replay of state,
- it provides auditable behavior over time.

Anchoring events on the Base blockchain allows detection of rollbacks and incomplete chain submissions.

### Ownables hub

The hub is a service for hosting Ownable packages.

You can upload Ownable packages to the hub. Packages can only be downloaded by the current owner.

This makes the Hub useful for:

- unlockable content tied to NFTs
- exchanging Ownables between users

The hub distributes package access. The Ownable state and lifecycle still come from the contract and event chain.

## Validation boundary

Contracts enforce admission rules and append admissible events. The wallet and hub perform full external reconciliation and mark invalid state when mismatches are found.

This functionality is available as a JavaScript library, allowing developers to integrate Ownables into their own applications.

