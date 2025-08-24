# Playwright Test Automation Suite

This repository contains automated end-to-end tests built using [Playwright](https://playwright.dev/) for testing the web application's UI functionality.

---
## Prerequisites

Ensure the following are installed on your system before proceeding:

- **Node.js**: `v22.18.0`

Check your Node version by running:

```bash
node -v
```
---

# Setup Instructions
- Clone the repository
- Cd to the project directory
- Install all required Node packages defined in package.json
    ```bash
        npm install
    ```
- Install playwright browsers:
    ```bash
        npx playwright install
    ```
---

# Running Tests
- Run all tests:
    ```bash
        npm run all
    ```
- Run all authentication scenarios:
    ```bash
        npm run authentication
    ```
- Run all shopping scenarios:
    ```bash
        npm run shopping
    ```
---

# View Test Report
- View the html report:
    ```bash
        npx playwright show-report
    ```
- View trace report:
    ```bash
        npx playwright show-trace
    ```
- The framework generated html, list, dot, and trace reoprts.
---

# Project Structure
- pages/  # This folder contains all the page objects.
- tests/  # This folder contains all the tests as *.spec.ts files.
- utils/  # This folder contains all the Commonly used utilities within the framework.
- .env    # Contains environment variables set for local testing
- package.json #contains node dependencies and custom scripts
- README.md 

---

# Configurations
- .env file is configured with working dummy values
    ```
        BASE_URL=''
        AS_USERNAME=''
        AS_PASSWORD=''
    ```
- This framework is configured to run in sequential, headed mode using chrome browser.
- Default test timeout is set as 60 seconds.
- Default exception timeout is set as 20 seconds.
- 2 local retries and 3 CI retries are configured to handle flaky tests.


