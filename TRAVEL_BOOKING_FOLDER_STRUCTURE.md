# KambujaGo architecture

KambujaGo is organized by domain under `src/features`. Shared UI, layout,
services, hooks, constants, and data contracts live at the top level. A feature
owns its components, hooks, services, and types so it can evolve without
coupling unrelated booking flows.

## Conventions

- Put reusable presentation primitives in `src/components`.
- Put travel-domain behavior in the matching `src/features/<domain>` folder.
- Keep API calls in feature services or `src/services` when shared.
- Keep pure, deterministic transformations in `src/utils`.
- Add public environment variables to `.env.example`; do not commit secrets.

The initial Vite screen remains available while the feature modules are built
out incrementally.
