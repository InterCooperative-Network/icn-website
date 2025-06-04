# ICN CLI Command Reference

## Overview

The ICN Command Line Interface (CLI) provides a comprehensive set of tools for interacting with ICN nodes, managing mesh jobs, participating in governance, and administering network resources.

## Installation and Setup

### Installing the CLI

```bash
# From source (recommended for development)
git clone https://github.com/InterCooperative-Network/icn-core.git
cd icn-core
cargo build --release
cp target/release/icn-cli /usr/local/bin/

# Or build and install directly
cargo install --path crates/icn-cli
```

### Configuration

The CLI can be configured via environment variables, configuration files, or command-line flags:

```bash
export ICN_NODE_URL="http://localhost:3000"
export ICN_DID="did:key:your-identity"
export ICN_LOG_LEVEL="info"
```

## Command Categories

### Node Management
- `icn-cli info` - Get basic node information
- `icn-cli status` - Check operational status of node and services

### DAG Operations
- `icn-cli dag put <DATA>` - Store data in the content-addressed DAG
- `icn-cli dag get <CID>` - Retrieve data from the DAG by Content ID
- `icn-cli dag list` - List DAG blocks stored on the node

### Mesh Computing
- `icn-cli mesh submit <JOB_SPEC>` - Submit a job to the distributed compute mesh
- `icn-cli mesh status [JOB_ID]` - Check the status of submitted mesh jobs
- `icn-cli mesh cancel <JOB_ID>` - Cancel a pending or running mesh job
- `icn-cli mesh results <JOB_ID>` - Retrieve results from completed mesh jobs

### Network Operations
- `icn-cli network peers` - Manage and query network peer connections
- `icn-cli network discover` - Discover peers in the network
- `icn-cli network send <PEER_ID> <MESSAGE>` - Send direct messages to network peers

### Governance Commands
- `icn-cli gov proposals` - Manage governance proposals
- `icn-cli gov vote <PROPOSAL_ID> <VOTE>` - Cast votes on governance proposals
- `icn-cli gov delegate` - Manage voting delegation

### Economic Operations
- `icn-cli mana balance` - Check current mana balance
- `icn-cli mana history` - View mana transaction history
- `icn-cli mana regeneration` - Check regeneration rate and capacity

### Identity Management
- `icn-cli identity create` - Create new DID and keypair
- `icn-cli identity show` - Display current identity information
- `icn-cli keys generate` - Generate new cryptographic keypair

## Example Workflows

### Submitting a Mesh Job

```bash
# Create job specification
cat > job.json << EOF
{
  "type": "compute",
  "code": "wasm_binary_base64",
  "args": ["arg1", "arg2"],
  "resources": {
    "cpu_seconds": 60,
    "memory_mb": 512,
    "storage_mb": 100
  }
}
EOF

# Submit job
JOB_ID=$(icn-cli mesh submit --file job.json --output json | jq -r '.job_id')

# Monitor progress
icn-cli mesh status $JOB_ID --follow

# Get results
icn-cli mesh results $JOB_ID --output-file results.json
```

### Participating in Governance

```bash
# List active proposals
icn-cli gov proposals list

# View proposal details
icn-cli gov proposals view prop_12345

# Vote on proposal
icn-cli gov vote prop_12345 yes --reason "Supports network improvement"

# Delegate votes
icn-cli gov delegate to did:key:trusted-delegate
```

### Managing Data

```bash
# Store data in DAG
CID=$(icn-cli dag put --file document.json --format json)

# Retrieve data
icn-cli dag get $CID --output-file retrieved.json

# List stored blocks
icn-cli dag list --limit 10
```

## Advanced Usage

### Scripting with ICN CLI

The CLI is designed to be script-friendly with consistent JSON output and proper exit codes:

```bash
#!/bin/bash
set -e

# Check node status
if ! icn-cli status --quiet; then
    echo "Node is not available"
    exit 1
fi

# Submit job and monitor
JOB_ID=$(icn-cli mesh submit --file job.json --output json | jq -r '.job_id')
while true; do
    STATUS=$(icn-cli mesh status "$JOB_ID" --output json | jq -r '.status')
    case "$STATUS" in
        "completed")
            icn-cli mesh results "$JOB_ID" --output-file "results_${JOB_ID}.json"
            break
            ;;
        "failed")
            echo "Job failed"
            exit 1
            ;;
    esac
    sleep 5
done
```

### Global Options

| Option | Description | Default |
|--------|-------------|---------|
| `--node-url` | ICN node URL to connect to | `http://localhost:3000` |
| `--did` | Your DID for authentication | From config file |
| `--verbose` | Verbose output | `false` |
| `--output` | Output format (json, yaml, table) | `table` |
| `--config` | Path to config file | `~/.icn/config.toml` |

## Getting Help

```bash
# General help
icn-cli --help

# Command-specific help
icn-cli mesh --help
icn-cli mesh submit --help
```

The ICN CLI provides a comprehensive interface for all network operations, from basic node management to complex mesh computing and governance participation. 