# Portfolio

My personal portfolio and project showcase built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** [ryuuta.id](https://ryuuta.id) / [ryuuta.vercel.app](https://ryuuta.vercel.app)

## What's inside

This is a monorepo containing my portfolio website and some side projects. Each project is deployable independently.

```
portfolio/
├── apps/
│   ├── web/           # Portfolio site
│   └── ...            # Other projects
├── packages/
│   ├── ui/            # Shared components
│   └── config/        # Shared configs
```

## Tech stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Turborepo** - Monorepo build system
- **Vercel** - Deployment

## Getting started

### Prerequisites

- Node.js 18.18.0 or higher
- Yarn 4 (managed via Corepack)

### Installation

```bash
# Clone the repository
git clone https://github.com/fbtwitter/portfolio.git
cd portfolio

# Enable Corepack for Yarn 4
corepack enable

# Install dependencies
yarn install

# Install Playwright browsers (if running e2e tests)
yarn install:playwright
```

### Development

```bash
# Start all apps in development mode
yarn g:build

# Run linter
yarn g:lint

# Run type checking
yarn g:typecheck

# Run unit tests
yarn g:test-unit

# Run e2e tests
yarn g:test-e2e
```

## Available commands

```bash
# Build
yarn g:build              # Build all apps
yarn g:codegen            # Run code generation

# Quality checks
yarn g:lint               # Lint all packages
yarn g:lint-styles        # Lint styles
yarn g:typecheck          # Type check all packages
yarn g:fix-all-files      # Fix linting issues

# Testing
yarn g:test-unit          # Run unit tests
yarn g:test-e2e           # Run e2e tests

# Cleanup
yarn g:clean              # Clean all build artifacts
yarn nuke:node_modules    # Remove all node_modules

# Dependencies
yarn deps:check           # Check for dependency updates
yarn deps:update          # Update dependencies

# Changesets (for versioning)
yarn g:changeset          # Create a changeset
yarn g:release            # Build and publish
```

## Project structure

Each app in `apps/` and package in `packages/` has its own README with specific setup instructions.

## Contributing

This is a personal portfolio, but if you spot any issues or have suggestions, feel free to open an issue.

## License

MIT © [Reza Fauzi Augusdi](https://github.com/fbtwitter)
