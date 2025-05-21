# RFC Synchronization Strategy

This document outlines how RFC (Request for Comments) documents from the `icn-docs` repository are integrated into the `icn-website`.

## Process Overview

1.  **Source of Truth**: All RFCs are maintained in Markdown format within the `icn-docs/rfcs/` directory of the `icn-docs` repository. This is the canonical source for all RFC content.
2.  **Embedding in Astro**: For public readability on the `icn-website`, relevant RFC Markdown files are temporarily duplicated and embedded into Astro components located in `icn-website/src/pages/docs/`.
    *   For example, an RFC like `rfc-0010-governance-core.md` from `icn-docs` would correspond to an Astro page like `src/pages/docs/rfc-0010-governance-core.astro` in this website's repository.
3.  **Selective Rendering**: Not all RFCs from `icn-docs` are rendered as standalone Astro pages. Only those deemed necessary for the public website are given dedicated pages. Other RFCs might be listed or summarized elsewhere.
4.  **Source Linking**: Each Astro page that renders an RFC includes a prominent link back to the original Markdown file in the `icn-docs` repository (e.g., "View source on GitHub"). This ensures that users can always access the latest version and full history of the RFC.

## Contribution Workflow

*   **All edits to RFC content MUST be made upstream in the `icn-docs` repository.**
*   Changes made directly to RFC content within the `icn-website` repository will be overwritten during synchronization.
*   The process of updating the Astro pages in `icn-website` based on changes in `icn-docs` is currently manual but will be automated in the future.

This strategy ensures that `icn-docs` remains the single source of truth for RFCs, while `icn-website` provides a user-friendly, publicly accessible view of selected documents. 