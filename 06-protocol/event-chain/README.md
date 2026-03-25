# Event Chain

The Ownables private layer uses microledgers.

Each Ownable chain is an ordered hash-linked event history. Events reference the previous event hash, forming a tamper-evident chain.

The first event is the genesis event.

State is derived from the chain history, not stored as a single mutable snapshot.
