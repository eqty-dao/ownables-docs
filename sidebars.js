/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'README',
    {
      type: 'category',
      label: 'SDK',
      items: [
        '01-sdk/README',
        '01-sdk/create-first-ownable',
        '01-sdk/manage-ownables',
        '01-sdk/transfer-and-consume',
        '01-sdk/in-browser-builder',
        '01-sdk/common-workflows',
        '01-sdk/troubleshooting',
        '01-sdk/faq',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        '02-concepts/README',
        '02-concepts/identity-state-history',
        '02-concepts/ownership-vs-behavior',
        '02-concepts/lifecycle',
        '02-concepts/event-sourcing-modes',
      ],
    },
    {
      type: 'category',
      label: 'Contract Development',
      items: [
        '03-contract-development/README',
        '03-contract-development/ownable-std-practical',
        '03-contract-development/project-setup',
        '03-contract-development/implement-init-and-exec',
        '03-contract-development/external-event-admission-practical',
        '03-contract-development/testing',
      ],
    },
    {
      type: 'category',
      label: 'Hub',
      items: [
        '04-hub/README',
        '04-hub/authority-model',
        '04-hub/lock-unlock-flow',
        '04-hub/verification-boundary',
        '04-hub/operations',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      items: [
        '05-integration/README',
        '05-integration/core-runtime',
        '05-integration/browser-platform',
        '05-integration/node-platform',
        '05-integration/evm-adapters',
        '05-integration/notify-stack',
        '05-integration/integration-patterns',
        '05-integration/production-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        '06-protocol/README',
        {
          type: 'category',
          label: 'Event Chain',
          items: [
            '06-protocol/event-chain/README',
            '06-protocol/event-chain/events',
            '06-protocol/event-chain/ordering-and-replay',
            '06-protocol/event-chain/validity-model',
          ],
        },
        {
          type: 'category',
          label: 'Event Protocol',
          items: [
            '06-protocol/event-protocol/README',
            '06-protocol/event-protocol/init',
            '06-protocol/event-protocol/exec',
            '06-protocol/event-protocol/external-evm-event',
            '06-protocol/event-protocol/external-ownable-event',
          ],
        },
        {
          type: 'category',
          label: 'External Event Subscriptions',
          items: [
            '06-protocol/external-event-subscriptions/README',
            '06-protocol/external-event-subscriptions/subscription-spec',
            '06-protocol/external-event-subscriptions/ingestion-entrypoints',
            '06-protocol/external-event-subscriptions/network-domain-caip2',
          ],
        },
        {
          type: 'category',
          label: 'Ownables WASM Contract',
          items: [
            '06-protocol/ownables-wasm-contract/README',
            '06-protocol/ownables-wasm-contract/protocol-role',
            '06-protocol/ownables-wasm-contract/admission-rules',
            '06-protocol/ownables-wasm-contract/query-surface',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            '06-protocol/security/README',
            '06-protocol/security/trust-boundary-contract-vs-wallet',
            '06-protocol/security/invalid-chain-states',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
