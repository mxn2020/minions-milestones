# minions-milestones

**Milestone definitions, dependencies, and completion criteria**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-milestones/sdk minions-sdk

# Python
pip install minions-milestones

# CLI (global)
npm install -g @minions-milestones/cli
```

---

## CLI

```bash
# Show help
milestones --help
```

---

## Python SDK

```python
from minions_milestones import create_client

client = create_client()
```

---

## Project Structure

```
minions-milestones/
  packages/
    core/           # TypeScript core library (@minions-milestones/sdk on npm)
    python/         # Python SDK (minions-milestones on PyPI)
    cli/            # CLI tool (@minions-milestones/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [milestones.minions.help](https://milestones.minions.help)
- Blog: [milestones.minions.blog](https://milestones.minions.blog)
- App: [milestones.minions.wtf](https://milestones.minions.wtf)

---

## License

[MIT](LICENSE)
