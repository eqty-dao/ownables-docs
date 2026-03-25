# Table of contents

* [Home](README.md)

## SDK

* [Installation](01-sdk/README.md)
* [Create First Ownable](01-sdk/create-first-ownable.md)
* [Manage Ownables](01-sdk/manage-ownables.md)
* [Transfer and Consume](01-sdk/transfer-and-consume.md)
* [In-Browser Builder](01-sdk/in-browser-builder.md)
* [Common Workflows](01-sdk/common-workflows.md)
* [Troubleshooting](01-sdk/troubleshooting.md)
* [FAQ](01-sdk/faq.md)

## Concepts

* [Concepts](02-concepts/README.md)
* [Identity, State, and History](02-concepts/identity-state-history.md)
* [Ownership vs Behavior](02-concepts/ownership-vs-behavior.md)
* [Lifecycle](02-concepts/lifecycle.md)
* [Event Sourcing Modes](02-concepts/event-sourcing-modes.md)

## Contract Development

* [Contract Development](03-contract-development/README.md)
* [Ownable Std (Practical)](03-contract-development/ownable-std-practical.md)
* [Project Setup](03-contract-development/project-setup.md)
* [Implement Init and Exec](03-contract-development/implement-init-and-exec.md)
* [External Event Admission (Practical)](03-contract-development/external-event-admission-practical.md)
* [Testing](03-contract-development/testing.md)

## Hub

* [Hub](04-hub/README.md)
* [Authority Model](04-hub/authority-model.md)
* [Lock and Unlock Flow](04-hub/lock-unlock-flow.md)
* [Verification Boundary](04-hub/verification-boundary.md)
* [Operations](04-hub/operations.md)

## Integration

* [Integration](05-integration/README.md)
* [Core Runtime](05-integration/core-runtime.md)
* [Browser Platform](05-integration/browser-platform.md)
* [Node Platform](05-integration/node-platform.md)
* [EVM Adapters](05-integration/evm-adapters.md)
* [Notify Stack](05-integration/notify-stack.md)
* [Integration Patterns](05-integration/integration-patterns.md)
* [Production Checklist](05-integration/production-checklist.md)

## Protocol

* [Protocol](06-protocol/README.md)
* [Event Chain](06-protocol/event-chain/README.md)
  * [Events](06-protocol/event-chain/events.md)
  * [Ordering and Replay](06-protocol/event-chain/ordering-and-replay.md)
  * [Validity Model](06-protocol/event-chain/validity-model.md)
* [Event Protocol](06-protocol/event-protocol/README.md)
  * [Init](06-protocol/event-protocol/init.md)
  * [Exec](06-protocol/event-protocol/exec.md)
  * [External EVM Event](06-protocol/event-protocol/external-evm-event.md)
  * [External Ownable Event](06-protocol/event-protocol/external-ownable-event.md)
* [External Event Subscriptions](06-protocol/external-event-subscriptions/README.md)
  * [Subscription Spec](06-protocol/external-event-subscriptions/subscription-spec.md)
  * [Ingestion Entrypoints](06-protocol/external-event-subscriptions/ingestion-entrypoints.md)
  * [Network Domain (CAIP-2)](06-protocol/external-event-subscriptions/network-domain-caip2.md)
* [Ownables WASM Contract](06-protocol/ownables-wasm-contract/README.md)
  * [Protocol Role](06-protocol/ownables-wasm-contract/protocol-role.md)
  * [Admission Rules](06-protocol/ownables-wasm-contract/admission-rules.md)
  * [Query Surface](06-protocol/ownables-wasm-contract/query-surface.md)
* [Security](06-protocol/security/README.md)
  * [Trust Boundary (Contract vs Wallet)](06-protocol/security/trust-boundary-contract-vs-wallet.md)
  * [Invalid Chain States](06-protocol/security/invalid-chain-states.md)
