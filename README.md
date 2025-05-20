# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

## 📄 ICN Documentation Mirror

This website includes a `/docs` section that mirrors the canonical documentation from the `icn-docs` repository. The goal is to provide a user-friendly, browsable version of the ICN project's core documents.

### Structure

-   **Source Content**: The actual Markdown files are maintained in the [icn-docs repository](https://github.com/intercoopnet/icn-docs) (replace with the actual link if different). Each major topic (e.g., `api`, `architecture`) resides in its own directory within `icn-docs`, typically as a `README.md` file.
-   **Website Pages**: Astro pages in `src/pages/docs/` (e.g., `src/pages/docs/api.astro`) are responsible for rendering this content.
-   **Synced Content**: Markdown files from `icn-docs` are copied into the `src/content/docs/` directory within this `icn-website` project. Each file is named after its topic slug (e.g., `api.md`, `architecture.md`). The Astro pages then load and render these local Markdown files.

### Syncing Documentation from `icn-docs`

To update the documentation content displayed on this website, you need to run the sync script. This script copies the relevant Markdown files from a local `icn-docs` repository into this project.

1.  **Clone `icn-docs`**: Ensure you have a local clone of the `icn-docs` repository. It should be located as a sibling directory to this `icn-website` project.
    ```bash
    # If you are in icn-website, and icn-docs is not yet cloned:
    git clone <URL_to_icn-docs_repository> ../icn-docs 
    ```
    (Replace `<URL_to_icn-docs_repository>` with the actual Git URL for `icn-docs`.)

2.  **Run the Sync Script**: From the root of the `icn-website` project, execute:
    ```bash
    ./scripts/sync-docs.sh
    ```
    If you get a permission denied error, you may need to make the script executable first:
    ```bash
    chmod +x ./scripts/sync-docs.sh
    ./scripts/sync-docs.sh
    ```

    The script will copy files from `../icn-docs/[topic]/README.md` (or `../icn-docs/[topic]/[topic].md`) to `src/content/docs/[topic].md`.

3.  **Commit Changes**: After running the script, new or updated Markdown files in `src/content/docs/` should be committed to the `icn-website` repository.

### How it Works

-   The `src/pages/docs/index.astro` page provides a landing page with links to all documentation topics.
-   Each individual topic page (e.g., `src/pages/docs/api.astro`) attempts to load its corresponding Markdown file from `src/content/docs/`.
-   If a Markdown file is not found (e.g., it hasn't been synced yet, or the topic doesn't exist in `icn-docs`), a "Coming Soon" message is displayed.
-   Each documentation page includes "View Source" and "Edit this page" links that point back to the canonical source file in the `icn-docs` GitHub repository. This encourages contributions directly to the source documentation.

### Adding New Documentation Topics

1.  **Create Content in `icn-docs`**: Add the new topic directory and `README.md` (or `[topic_slug].md`) in the `icn-docs` repository.
2.  **Update Sync Script (if necessary)**: If the new topic slug isn't already covered by the `topics` array in `scripts/sync-docs.sh`, add it.
3.  **Create Astro Page**: Add a new `.astro` file in `src/pages/docs/` for the new topic (e.g., `src/pages/docs/new-topic.astro`). You can copy an existing topic page and update the `topicName`, `sourceFilePathInUpstream`, and `Astro.glob` path.
4.  **Update Docs Landing Page**: Add the new topic to the `topics` array in `src/pages/docs/index.astro`.
5.  **Run Sync Script**: Execute `./scripts/sync-docs.sh` to copy the new content.
6.  **Commit**: Commit the new Astro page, updates to `index.astro`, and the newly synced Markdown file in `src/content/docs/`.
