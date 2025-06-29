# ICN Economic Model

The InterCooperative Network (ICN) implements a dual economic system designed to facilitate fair resource allocation, prevent abuse, and enable a thriving cooperative digital economy.

## Overview

ICN's economic model consists of two primary components:

1. **Mana**: A regenerating capacity credit system for compute and network participation
2. **Tokenized Assets**: Support for fungible and non-fungible tokens representing goods, services, and value

## Mana System

### Purpose

Mana serves as ICN's primary resource management mechanism, designed to:

- **Prevent Spam**: Rate-limit network participation and resource consumption
- **Enable Fair Access**: Provide regenerating capacity that doesn't require initial capital
- **Influence Participation**: Allow reputation and contributions to affect regeneration rates
- **Resist Sybil Attacks**: Tie capacity to established identities and behaviors

### Key Characteristics

- **Regenerating**: Mana regenerates over time, ensuring sustained network participation
- **Identity-Scoped**: Each DID has its own mana balance and regeneration rate
- **Policy-Influenced**: Regeneration rates can be modified by governance policies and reputation
- **Non-Transferable**: Mana cannot be directly transferred between identities
- **Consumption-Based**: Used for compute resources, storage, and network operations

### Mana Operations

```
Initial Mana → Consumption (Jobs, Storage, Network) → Regeneration → Repeat
```

## Tokenized Asset System

### Purpose

The tokenized asset layer enables:

- **Economic Exchange**: Trading of goods, services, and value between participants
- **Cooperative Governance**: Token-based voting and decision-making
- **Resource Ownership**: Representation of physical and digital assets
- **Value Creation**: Incentivizing contributions and network effects

### Token Types

#### Fungible Tokens
- **Utility Tokens**: Access to specific services or resources
- **Governance Tokens**: Voting rights in cooperative decision-making
- **Exchange Tokens**: Medium of exchange for goods and services

#### Non-Fungible Tokens (NFTs)
- **Credentials**: Verifiable qualifications and achievements
- **Assets**: Unique physical or digital property
- **Memberships**: Access rights to specific communities or cooperatives

## Economic Interactions

### Mesh Job Execution

1. **Job Submission**: Requires sufficient mana balance
2. **Executor Selection**: Considers both mana capacity and reputation
3. **Resource Allocation**: Mana is consumed based on computational requirements
4. **Payment**: Optional token-based compensation for executors
5. **Reputation Updates**: Successful completion affects future mana regeneration rates

### Governance Participation

1. **Proposal Submission**: May require mana or token stake
2. **Voting**: Can use governance tokens or mana-weighted voting
3. **Implementation**: Approved proposals may affect economic parameters

### Resource Management

- **Storage**: Mana consumed for DAG storage operations
- **Network Usage**: P2P communications and bandwidth usage
- **Compute**: WASM execution and processing time

## Economic Policies

### Mana Policies

Economic behavior is governed by explicit policies defined in the Cooperative Contract Language (CCL):

- **Base Regeneration Rate**: Default mana regeneration speed
- **Reputation Multipliers**: How reputation affects regeneration
- **Consumption Rates**: Mana costs for different operations
- **Capacity Limits**: Maximum mana balances and usage rates

### Token Policies

- **Issuance Rules**: How new tokens are created and distributed
- **Transfer Restrictions**: Limitations on token movements
- **Governance Rights**: Voting power and proposal requirements
- **Burning Mechanisms**: Token destruction for deflationary pressure

## Implementation

### Core Components

The economic model is implemented across several `icn-core` crates:

- **`icn-economics`**: Core economic logic, mana management, and policy enforcement
- **`icn-governance`**: Token-based and mana-weighted governance mechanisms
- **`icn-identity`**: Identity-scoped economic state and credentials
- **`icn-runtime`**: Economic enforcement in job execution and resource usage

### Policy Execution

Economic policies are:

1. **Defined**: Written in CCL (Cooperative Contract Language)
2. **Compiled**: Transformed into executable WASM modules
3. **Deployed**: Distributed and executed across the network
4. **Enforced**: Applied consistently by all participating nodes

## Economic Sustainability

### Network Effects

The dual economic model creates positive feedback loops:

- **Mana Regeneration**: Encourages consistent, long-term participation
- **Reputation Building**: Rewards reliable behavior with increased capacity
- **Token Value**: Successful network usage increases token utility and value
- **Cooperative Growth**: Larger, more active cooperatives gain economic advantages

### Anti-Abuse Mechanisms

- **Identity Requirements**: All economic activity tied to verifiable DIDs
- **Rate Limiting**: Mana prevents resource exhaustion attacks
- **Reputation Tracking**: Bad actors face reduced capacity over time
- **Governance Oversight**: Community can adjust economic parameters

## Future Development

The economic model will continue to evolve through:

- **Governance Proposals**: Community-driven parameter adjustments
- **Market Feedback**: Real-world usage informing policy updates
- **Research Integration**: Academic insights on cooperative economics
- **Interoperability**: Integration with external economic systems

---

For technical implementation details, see the [`icn-economics` crate documentation](https://github.com/InterCooperative-Network/icn-core/tree/main/crates/icn-economics).

For governance mechanisms, see the [Governance Documentation](../governance/README.md). 