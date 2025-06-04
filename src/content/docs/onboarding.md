# Developer Onboarding Guide

## Welcome to ICN Development

This guide will help you get started developing with and contributing to the InterCooperative Network (ICN). Whether you're building applications on ICN, contributing to the core protocol, or developing integrations, this guide provides the foundation you need.

## Prerequisites

### System Requirements

#### Operating System
- **Linux**: Ubuntu 20.04+ or similar distribution (recommended)
- **macOS**: 10.15+ with Xcode command line tools
- **Windows**: Windows 10+ with WSL2 (Linux development environment recommended)

#### Hardware
- **CPU**: 4+ cores recommended for compilation
- **RAM**: 8GB minimum, 16GB+ recommended
- **Storage**: 20GB+ free space for development environment

### Development Tools

#### Required Tools
```bash
# Rust toolchain (nightly)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup toolchain install nightly
rustup default nightly

# Git for version control
sudo apt-get install git  # Ubuntu/Debian
brew install git          # macOS

# Build essentials
sudo apt-get install build-essential pkg-config libssl-dev  # Ubuntu/Debian
xcode-select --install                                       # macOS
```

#### Recommended Tools
```bash
# Just for task running
cargo install just

# Development utilities
cargo install cargo-watch cargo-expand cargo-audit
cargo install --locked cargo-deny
cargo install cargo-machete

# Code formatting and linting
rustup component add rustfmt clippy
```

## Development Environment Setup

### Clone the Repository
```bash
# Clone the main ICN repository
git clone https://github.com/InterCooperative-Network/icn-core.git
cd icn-core

# Verify Rust toolchain
rustup show
```

### Install Dependencies
```bash
# Install all Rust dependencies
cargo build

# Install pre-commit hooks (optional but recommended)
pip install pre-commit
pre-commit install
```

### Verify Installation
```bash
# Run tests to verify everything works
just test

# Check code formatting
just format-check

# Run linting
just lint

# Build documentation
just docs
```

## Project Structure

### Repository Layout
```
icn-core/
├── crates/                 # Core library crates
│   ├── icn-common/        # Shared types and utilities
│   ├── icn-identity/      # DID and identity management
│   ├── icn-dag/          # Content-addressed storage
│   ├── icn-mesh/         # Distributed computing
│   ├── icn-runtime/      # WASM execution environment
│   ├── icn-economics/    # Mana and token systems
│   ├── icn-governance/   # Proposal and voting
│   ├── icn-network/      # P2P networking
│   ├── icn-api/          # External API definitions
│   ├── icn-node/         # Main node binary
│   └── icn-cli/          # Command-line interface
├── icn-ccl/              # Cooperative Contract Language
├── tests/                # Integration tests
├── docs/                 # Internal documentation
├── scripts/              # Development scripts
├── .github/              # CI/CD workflows
├── Cargo.toml           # Workspace configuration
├── justfile             # Task runner configuration
└── README.md
```

## Development Workflow

### Daily Development

#### Using Just Commands
```bash
# Build all crates
just build

# Run all tests
just test

# Run specific crate tests
just test-crate icn-mesh

# Format code
just format

# Run linting
just lint

# Generate documentation
just docs

# Clean build artifacts
just clean
```

### Code Quality Standards

#### Formatting
All code must be formatted with `rustfmt`:
```bash
# Format all code
cargo fmt --all

# Check formatting without changing files
cargo fmt --all -- --check
```

#### Linting
All code must pass `clippy` without warnings:
```bash
# Run clippy on all targets
cargo clippy --all-targets --all-features -- -D warnings
```

#### Testing Requirements
- **Unit Tests**: Every public function and struct
- **Integration Tests**: Cross-crate interactions
- **Property Tests**: Where applicable using proptest
- **Documentation Tests**: All public API examples

## Building Your First ICN Application

### Simple CLI Tool Example

Create a new crate that uses ICN APIs:

```bash
# Create new binary crate
cargo new --bin my-icn-tool
cd my-icn-tool
```

Add ICN dependencies to `Cargo.toml`:
```toml
[dependencies]
icn-api = { path = "../icn-core/crates/icn-api" }
icn-common = { path = "../icn-core/crates/icn-common" }
tokio = { version = "1.0", features = ["full"] }
```

Example application:
```rust
// src/main.rs
use icn_api::NodeApi;
use icn_common::{Did, CommonError};

#[tokio::main]
async fn main() -> Result<(), CommonError> {
    // Connect to local ICN node
    let node_api = NodeApi::new("http://localhost:3000").await?;
    
    // Get node information
    let info = node_api.get_node_info().await?;
    println!("Connected to ICN node: {}", info.node_id);
    
    // Submit a simple mesh job
    let job = create_example_job();
    let job_id = node_api.submit_mesh_job(&job).await?;
    println!("Submitted job: {}", job_id);
    
    Ok(())
}
```

## Contributing to ICN Core

### Development Process

#### 1. Issue Creation
Before starting work:
- Check existing issues and discussions
- Create an issue describing the problem or feature
- Get feedback from maintainers before implementation

#### 2. Branch Strategy
```bash
# Create feature branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

#### 3. Implementation Guidelines

**Code Style**:
- Follow Rust naming conventions
- Use descriptive variable and function names
- Add comprehensive documentation
- Include error handling for all operations

**Documentation**:
```rust
/// Submits a mesh job to the distributed compute network.
/// 
/// # Arguments
/// 
/// * `submitter` - DID of the entity submitting the job
/// * `job` - The mesh job specification to execute
/// 
/// # Returns
/// 
/// Returns `Ok(JobId)` if successful, or `Err(CommonError)` if:
/// - Insufficient mana balance
/// - Invalid job specification  
/// - Network connectivity issues
pub async fn submit_job(
    &self,
    submitter: &Did,
    job: &MeshJob
) -> Result<JobId, CommonError> {
    // Implementation
}
```

### Pull Request Guidelines

#### PR Title Format
Use conventional commits format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `test:` for test additions/changes
- `refactor:` for code refactoring
- `chore:` for maintenance tasks

## Debugging and Troubleshooting

### Common Development Issues

#### Build Failures
```bash
# Clean and rebuild
cargo clean
cargo build

# Update toolchain
rustup update nightly
```

#### Test Failures
```bash
# Run tests with detailed output
cargo test -- --nocapture

# Run specific test
cargo test test_name -- --exact
```

#### Runtime Issues
```bash
# Enable debug logging
RUST_LOG=debug cargo run

# Run with backtrace
RUST_BACKTRACE=1 cargo run
```

## Resources and Support

### Documentation
- **API Documentation**: Run `just docs` and open `target/doc/index.html`
- **Architecture Guide**: Available in the docs section
- **RFCs**: For design decisions and proposals

### Community
- **GitHub Discussions**: For general questions and ideas
- **GitHub Issues**: For bug reports and feature requests

### Learning Resources
- **Rust Book**: https://doc.rust-lang.org/book/
- **Async Rust**: https://rust-lang.github.io/async-book/
- **WebAssembly with Rust**: https://rustwasm.github.io/book/

## Next Steps

1. **Set up your development environment** following the prerequisites
2. **Run the test suite** to verify everything works
3. **Explore the codebase** starting with `icn-common` and `icn-api`
4. **Read the architecture documentation** to understand system design
5. **Start with small contributions** like documentation improvements or minor bug fixes
6. **Join the community** discussions to get oriented

Welcome to the ICN development community! We're excited to have you contribute to building a cooperative digital commons. 