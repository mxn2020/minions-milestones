---
title: Quick Start
description: Get up and running with Minions Milestones in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-milestones/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_milestones import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
milestones info
```
