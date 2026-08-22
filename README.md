# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # Spelling Bee

  A spelling game built with React, TypeScript, and Vite. The project is currently in its initial development phase.

  ## Initial Phase

  The first phase establishes the foundation for the game:

  - Set up a React 19 application with TypeScript and Vite.
  - Add a fast local development workflow with Vite and HMR.
  - Configure ESLint and TypeScript for consistent, maintainable code.
  - Prepare the main application structure for the spelling challenge interface.

  The game interface and core gameplay are the next focus areas. Planned work includes adding word data, displaying the current challenge, accepting and validating player answers, tracking progress, and providing feedback after each attempt.

  ## Getting Started

  Install dependencies:

  ```bash
  pnpm install
````

Start the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

export default defineConfig([
