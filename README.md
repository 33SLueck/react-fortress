# React Fortress 🏰

> **This repository is a GitHub template!**
>
> Click **"Use this template"** on GitHub to create your own project with all features pre-configured.

---

**Enterprise-Grade React Template with Bulletproof Quality Assurance**

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)
![Husky](https://img.shields.io/badge/Husky-9.1.7-000000?style=for-the-badge&logo=git&logoColor=white)

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Dependabot](https://img.shields.io/badge/Dependabot-enabled-brightgreen?style=for-the-badge&logo=dependabot&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Commitizen](https://img.shields.io/badge/Commitizen-friendly-brightgreen?style=for-the-badge)

**React Fortress** is a fortified GitHub template repository for enterprise-grade React applications. Built with multiple layers of quality gates, automated testing, and bulletproof CI/CD pipelines to ensure your code is production-ready from day one.

## 🏰 Fortress Features

**React Fortress** provides multi-layered protection for your codebase:

### �️ **Defense Systems**

- **Quality Gates** - 5-layer CI/CD pipeline protection
- **Git Fortress** - Pre-commit and pre-push validation
- **Type Safety** - Full TypeScript armor
- **Test Coverage** - Comprehensive testing shield
- **Code Standards** - ESLint + Prettier enforcement
- **Commit Guard** - Conventional commit validation

### ⚡ **Core Arsenal**

- **React 19** + **TypeScript** - Modern React with type safety
- **Vite 7** - Lightning fast build tool
- **Tailwind CSS 4** - Utility-first CSS with dark mode
- **Vitest** - Fast unit testing with React Testing Library
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Git hooks for quality assurance
- **Commitizen + Commitlint** - Conventional commit standards
- **Dependabot** - Automated dependency updates with security scanning
- **GitHub Actions** - Automated CI/CD pipeline

---

## 🖥️ VS Code Workspace Setup

This template includes a complete VS Code workspace configuration:

- `.vscode/settings.json`: Provides recommended editor settings (e.g. formatting, linting, TypeScript, Tailwind CSS, recommended extensions).
- `.vscode/tasks.json`: Contains all important build, test, and QA tasks that can be run directly from the VS Code task bar.

**Benefits:**

- Instantly ready-to-use development environment
- Consistent code quality across the team
- Convenient task execution without terminal commands

> **Tip:** Open the VS Code Command Palette (`Ctrl+Shift+P`) and select "Tasks: Run Task" for all important workflows!

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
  - Conventional Commits (vivaxy.vscode-conventional-commits) - for commit assistance

### 2. Project Setup

#### 🟢 **Recommended: Use as GitHub Template**

1. Click the green **"Use this template"** button on the repository page.
2. Create your new repository (e.g. `my-app`) from this template.
3. Clone your new repository:

   ```sh
   git clone https://github.com/<your-github-username>/<your-repo>.git
   cd <your-repo>
   npm install
   ```

#### ⚪ **Alternative: Clone Directly**

```sh
git clone https://github.com/33SLueck/react-fortress.git
cd react-fortress
npm install
```

### 3. Start Development

```sh
npm run dev
# or via VS Code: Tasks → Development Server
```

### 4. Linting & Formatting

- **Type checking:**
  ```sh
  npm run type-check
  ```
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

### 6. Git Workflow with Conventional Commits

**React Fortress** enforces conventional commit standards for better project history and automated changelog generation.

#### Interactive Commit Creation

```sh
npm run commit
```

This starts an interactive wizard that helps you create properly formatted commit messages following the conventional commit standard.

#### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or correcting tests
- `chore`: Changes to build process or auxiliary tools

#### Example Commits

```sh
feat: add user authentication system
fix: resolve memory leak in data processing
docs: update installation instructions
style: format code according to prettier rules
refactor: extract common validation logic
test: add integration tests for API endpoints
chore: update dependencies to latest versions
```

### 7. Using VS Code Tasks

Open Command Palette (`Ctrl+Shift+P`) → "Tasks: Run Task" and select a task:

- **Development Server** - Starts the development server
- **Build Project** - Creates the production build
- **Type Check** - Validates TypeScript types
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
    - `npm test` – Runs all tests in watch mode
    - `npm run test:unit` – Runs all tests once (CI mode)
    - `npm run test:watch` – Tests in watch mode
    - `npm run test:ui` – Starts the Vitest UI
    - `npm run test:coverage` – Shows test coverage
  - **Test Structure:** Tests are located in the `src/__tests__/` folder, organized by components and pages.
  - **Recommended Extensions:** Vitest Explorer and Test Adapter Converter for better VS Code integration.

- **GitHub Actions Workflow:**
  - A comprehensive workflow is set up in `.github/workflows/test.yml` that runs on every push and pull request:
    - **Type Checking** - Validates TypeScript types
    - **ESLint Check** - Code quality and style rules
    - **Prettier Check** - Code formatting validation
    - **Unit Tests** - Runs all test suites
    - **Build Check** - Ensures production build works
  - This ensures high code quality and prevents faulty commits from reaching any branch.

- **Git Hooks with Husky:**
  - **Pre-commit Hook** - Runs on every commit:
    - `lint-staged` - Formats and lints only changed files
    - `type-check` - Validates TypeScript types
  - **Pre-push Hook** - Runs before pushing:
    - `test:unit` - Runs all tests
    - `build` - Ensures production build works
  - **Instant Feedback** - Catches issues before they reach CI/CD

- **Note on npm deprecation warnings:**
  - When installing dependencies, warnings like `deprecated inflight` or `deprecated glob` may appear.
  - These warnings come from indirect dependencies used by older tools.
  - They have **no impact** on the functionality or security of your project and can be ignored. The maintainers of the respective tools will update these dependencies over time.

- **Automated Dependency Management:**
  - **Dependabot** is configured to automatically check for dependency updates weekly
  - Creates pull requests for:
    - NPM package updates (grouped by related packages like React, TypeScript, ESLint)
    - GitHub Actions version updates
    - Security vulnerability patches
  - All updates run through the complete quality gate pipeline before being suggested
  - Configuration: `.github/dependabot.yml`

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

**� Welcome to React Fortress - Where Code Quality is King!**

_Built with ❤️ for developers who value bulletproof applications and enterprise-grade development workflows._
