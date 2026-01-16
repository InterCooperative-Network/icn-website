# Developer Onboarding

Welcome to the InterCooperative Network (ICN) developer onboarding program. This structured curriculum will take you from zero to productive ICN contributor, whether you're new to Rust or an experienced systems programmer.

## What is ICN?

ICN is a **decentralized coordination substrate for cooperative organizations**. Unlike blockchains that focus on trustless consensus, ICN focuses on:

- **Trust-based coordination**: Social relationships inform system behavior
- **Cooperative economics**: Mutual credit, clearing, and fair value exchange
- **Federation**: Independent cooperatives working together across boundaries
- **Privacy and sovereignty**: Members control their own data and identity

The system is built in Rust using an actor-based architecture, with components for identity, trust, networking, gossip synchronization, ledger accounting, smart contracts, and inter-cooperative federation.

## Choose Your Track

**Foundations Track** (5-6 weeks)
- New to Rust or haven't used it in production
- Familiar with programming concepts from other languages
- Want to learn Rust idioms through real-world ICN code

**Accelerated Track** (3-4 weeks)
- Comfortable with Rust ownership, lifetimes, and async
- Experience with distributed systems or P2P networking
- Want to focus on ICN architecture and contribute quickly

## Curriculum Overview

### Core Modules (0-10)

| Module | Topic | What You'll Learn |
|--------|-------|-------------------|
| 0 | [Setup](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-00-setup.md) | Build environment, tooling, project structure |
| 1 | [Rust Fundamentals](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-01-rust-fundamentals.md) | Ownership, error handling, async patterns |
| 2 | [Architecture](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-02-architecture-overview.md) | Layer stack, crate responsibilities, integration points |
| 3 | [Runtime & Actors](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-03-runtime-actors.md) | Supervisor, actor lifecycle, shutdown coordination |
| 4 | [Identity & Trust](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-04-identity-trust.md) | DIDs, keystore, trust graphs, key rotation |
| 5 | [Network & Gossip](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-05-network-gossip.md) | QUIC transport, mDNS, topic subscriptions |
| 6 | [Ledger & Contracts](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-06-ledger-contracts.md) | Mutual credit, Merkle-DAG, CCL execution |
| 7 | [Gateway & SDK](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-07-gateway-sdk.md) | REST API, WebSocket, JWT auth, SDK usage |
| 8 | [Web UI](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-08-web-ui.md) | Pilot UI, data flow, session handling |
| 9 | [Operations](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-09-ops-deploy.md) | Deployment, monitoring, production hardening |
| 10 | [Contributing](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-10-contributor-workflow.md) | Tests, CI, PR workflow, git conventions |

### Advanced Module

| Module | Topic | What You'll Learn |
|--------|-------|-------------------|
| 11 | [Federation](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/modules/module-11-federation.md) | Inter-coop agreements, clearing, netting, attestations |

### Hands-on Workshops

Each module has a corresponding workshop with practical exercises:

| Workshop | Focus Area |
|----------|------------|
| [Workshop 0](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-00-setup.md) | Local Build and Repo Orientation |
| [Workshop 1](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-01-rust-fundamentals.md) | Rust Fundamentals Exercises |
| [Workshop 2](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-02-architecture.md) | Architecture Deep Dive |
| [Workshop 3](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-03-runtime.md) | Runtime & Actor Patterns |
| [Workshop 4](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-04-identity-trust.md) | Identity & Trust Operations |
| [Workshop 5](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-05-network-gossip.md) | Network & Gossip Protocol |
| [Workshop 6](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-06-ledger-contracts.md) | Ledger & Contract Development |
| [Workshop 7](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-07-gateway-sdk.md) | Gateway API & SDK Usage |
| [Workshop 8](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-08-web-ui.md) | Web UI Development |
| [Workshop 9](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-09-ops.md) | Operations & Deployment |
| [Workshop 10](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-10-contributor.md) | Contributor Workflow |
| [Workshop 11](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/workshops/workshop-11-federation.md) | Federation Patterns |

## Learning Path

**Foundations Track (6 weeks)**
```
Week 1: Setup + Rust Fundamentals
Week 2: Architecture + Runtime
Week 3: Identity + Network
Week 4: Ledger
Week 5: Gateway + UI
Week 6: Ops + Contributing + Capstone
```

**Accelerated Track (4 weeks)**
```
Week 1: Setup → Runtime
Week 2: Identity → Ledger
Week 3: Gateway + UI
Week 4: Ops + Contributing + Capstone
```

## Supporting Materials

- [**Syllabus**](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/syllabus.md) - Course outline and pacing
- [**Patterns**](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/patterns.md) - Common code patterns reference
- [**Assessments**](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/assessments.md) - Quick knowledge checks
- [**Capstone**](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/capstone.md) - Final integrative project
- [**Reading Map**](https://github.com/InterCooperative-Network/icn/blob/main/docs/onboarding/reading-map.md) - Module-to-code cross-references

## Quick Start

```bash
# Clone and build
git clone https://github.com/InterCooperative-Network/icn.git
cd icn/icn
cargo build

# Run tests
cargo test --workspace --lib

# Start the daemon (requires initialized identity)
export ICN_PASSPHRASE="your-passphrase"
./target/debug/icnctl id init
./target/debug/icnd

# Format and lint before contributing
cargo fmt --all
cargo clippy --workspace
```

## Current Status

- **18 phases complete** - Core infrastructure fully built
- **2,400+ tests** - Comprehensive test coverage
- **26 crates** - Modular architecture
- **Live on K3s** - Running in production cluster since December 2025

## Getting Help

- **Issues**: [Open a GitHub issue](https://github.com/InterCooperative-Network/icn/issues) for bugs or questions
- **Discussions**: [GitHub Discussions](https://github.com/InterCooperative-Network/icn/discussions) for design conversations
- **Contributing**: See [CONTRIBUTING.md](https://github.com/InterCooperative-Network/icn/blob/main/CONTRIBUTING.md) for PR guidelines

## Full Curriculum

For the complete onboarding curriculum including all modules, workshops, and supporting materials:

**[View Full Onboarding Curriculum on GitHub](https://github.com/InterCooperative-Network/icn/tree/main/docs/onboarding)**
