# GEMINI.md

## Project Overview

This project is a web-based tool for astrophotographers to calculate the maximum distance a filter can be placed from a camera sensor without causing vignetting. The tool will take into account the following parameters:

*   Filter size
*   Camera sensor dimensions
*   Telescope/lens focal length
*   Telescope/lens aperture diameter

The website will feature a professional and simple user interface. To streamline the user experience, it will provide dropdown menus populated with known camera sensors, filters, and telescope OTAs (Optical Tube Assemblies) to quickly populate the calculation fields.

## Building and Running

**Tech Stack:** This project is built with [Next.js](https://nextjs.org/), a React framework for building modern web applications. It uses [TypeScript](https://www.typescriptlang.org/) for static typing and [Tailwind CSS](https://tailwindcss.com/) for styling.

**Build Commands:**
```bash
npm install
npm run build
```

**Run Commands:**
```bash
# For local development:
npm run dev
```

## Development Conventions

*   **Code Style:** The project uses [ESLint](https.eslint.org/) for code linting. The configuration is located in `.eslintrc.json`.
*   **Testing:** A comprehensive testing suite will be crucial for ensuring the accuracy of the calculations and the reliability of the user interface.

    *   **Testing Framework:** [Vitest](https://vitest.dev/) is recommended for its speed and modern features. It has a Jest-compatible API, making it easy to adopt.
    *   **Test Types:**
        *   **Unit Tests:** These will cover the core calculation logic to ensure its mathematical correctness.
        *   **Component Tests:** These will test individual UI components (e.g., dropdowns, input fields) in isolation to ensure they behave as expected.
        *   **End-to-End (E2E) Tests:** These will simulate user workflows from start to finish. [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io/) are recommended for E2E testing.
    *   **Test Location:** Test files should be co-located with the source files they are testing, using a `*.test.ts` or `*.spec.ts` naming convention.
    *   **Test Command:**
        ```bash
        npm test
        ```
*   **Data:** The data for cameras, filters, and telescopes should be stored in a structured format (e.g., JSON files) to make it easy to manage and update.