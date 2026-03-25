# FAQ

## Is an Ownable just an NFT?

No. NFTs can represent ownership. Ownables represent ownership plus behavior and lifecycle through an event chain.

## Do I need on-chain execution for every state change?

Not always. Ownables can keep behavior in private event chains while anchoring ownership context to Base, depending on mode.

## Can I change external subscription rules later?

Not for the same Ownable instance. Subscription specs are defined at init and are immutable for deterministic replay.
