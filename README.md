# React + TypeScript + Vite + Tailwind (GitHub Template)

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)

This is a GitHub template repository for quickly starting a new project with React, TypeScript, Vite, and Tailwind CSS. It includes hot module replacement (HMR), ESLint configuration, Prettier formatting and a minimal setup for rapid development.

## 🛠️ Tech Stack

- **React 19** + **TypeScript** - Modern React with type safety
- **Vite 7** - Lightning fast build tool
- **Tailwind CSS 4** - Utility-first CSS with dark mode
- **Vitest** - Fast unit testing with React Testing Library
- **ESLint + Prettier** - Code quality and formatting
- **GitHub Actions** - Automated CI/CD pipeline

---

## 🚀 Step-by-Step Guide: Setup & Usage

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (recommended: LTS)
- [VS Code](https://code.visualstudio.com/)
- Recommended Extensions (suggested when opening the project):
  - Prettier (esbenp.prettier-vscode)
  - ESLint (dbaeumer.vscode-eslint)
  - TypeScript Next (ms-vscode.vscode-typescript-next)
  - Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
  - Tasks (actboy168.tasks)
  - Vitest Explorer (vitest.explorer) - for test integration
  - Test Adapter Converter (ms-vscode.test-adapter-converter) - for better test display

### 2. Project Setup

```sh
git clone https://github.com/your-username/your-new-repo.git
cd your-new-repo
npm install
```

### 3. Start Development

```sh
npm run dev
# or via VS Code: Tasks → Development Server
```

### 4. Linting & Formatting

- **Check code:**
  ```sh
  npm run lint
  ```
- **Auto-fix:**
  ```sh
  npm run lint:fix
  ```
- **Format code:**
  ```sh
  npm run format
  ```
- **Check formatting:**
  ```sh
  npm run format:check
  ```

### 5. Build & Preview

- **Build:**
  ```sh
  npm run build
  ```
- **Preview:**
  ```sh
  npm run preview
  ```

### 6. Using VS Code Tasks

Open Command Palette (`Ctrl+Shift+P`) → "Tasks: Run Task" and select a task:

- **Development Server** - Starts the development server
- **Build Project** - Creates the production build
- **Lint Code** - Checks code for errors
- **Lint & Fix** - Checks and fixes code automatically
- **Format Code** - Formats code with Prettier
- **Preview Build** - Starts preview of production build
- **Run Tests** - Runs all tests once
- **Test Watch Mode** - Starts tests in watch mode
- **Test UI** - Opens the Vitest Web UI
- **Test Coverage** - Creates coverage report

### 7. Testing & CI

- **Vitest Integration:**
  - The project uses Vitest and @testing-library/react for unit and component tests.
  - Test scripts:
    - `npm test` – Runs all tests once
    - `npm run test:watch` – Tests in watch mode
    - `npm run test:ui` – Starts the Vitest UI
    - `npm run test:coverage` – Shows test coverage
  - **Test Structure:** Tests are located in the `src/__tests__/` folder, organized by components and pages.
  - **Recommended Extensions:** Vitest Explorer and Test Adapter Converter for better VS Code integration.

- **GitHub Actions Workflow:**
  - A workflow is set up in `.github/workflows/test.yml` that automatically runs linting and tests on every push and pull request to `main`.
  - This ensures no faulty commits reach the main branch.

- **Note on npm deprecation warnings:**
  - When installing dependencies, warnings like `deprecated inflight` or `deprecated glob` may appear.
  - These warnings come from indirect dependencies used by older tools.
  - They have **no impact** on the functionality or security of your project and can be ignored. The maintainers of the respective tools will update these dependencies over time.

---

### 8. Features

- **Light/Dark Theme Switch:**
  - The template includes a theme switcher (☀️/🌙) that toggles between light and dark mode.
  - The selection is saved in Local Storage and restored on next load.
  - In dark mode, colors from your `index.css` are used.

### 9. Lint/Format Rules (Key Settings)

- **Semicolons:** automatically added (`semi: true`)
- **Enums:** PascalCase for enum names, UPPER_CASE for enum members
- **Imports:** grouped and alphabetically sorted
- **Prettier:** ensures consistent formatting

All rules can be found in `eslint.config.js` and `.prettierrc`.

---

## 📦 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD
├── .vscode/             # VS Code Settings & Tasks
├── public/              # Static Assets
├── src/
│   ├── __tests__/       # Test Files
│   │   ├── components/  # Component Tests
│   │   └── pages/       # Page Tests
│   ├── components/      # React Components
│   ├── pages/           # Page Components
│   ├── test/           # Test Setup
│   ├── App.tsx         # Main App Component
│   ├── main.tsx        # Entry Point
│   └── index.css       # Global Styles & Theme
├── eslint.config.js    # ESLint Configuration
├── tailwind.config.js  # Tailwind Configuration
├── vite.config.ts      # Vite & Vitest Configuration
└── package.json        # Dependencies & Scripts
```

---

**🎯 Happy Coding!!!**
