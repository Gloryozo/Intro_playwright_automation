# Automated Testing with Playwright

A JavaScript project demonstrating automated testing with Jest for calculator functions. This project includes unit tests for arithmetic operations (add and divide) with comprehensive error handling and edge case coverage.

## Project Structure

```
automatedTestingPlaywright/
├── src/
│   ├── index.js              # Main entry point
│   ├── calculatorAdd.js      # Add function implementation
│   └── calculatorDivide.js   # Divide function implementation
├── __tests__/
│   └── calculator.test.js    # Jest test suite
├── jest.config.js            # Jest configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Prerequisites

Before setting up this project, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Clone or Navigate to Project Directory

```bash
cd automatedTestingPlaywright
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

This will install:
- **Jest** (v30.2.0) - Testing framework for running unit tests

### 3. Verify Installation

Check that dependencies are installed correctly:

```bash
npm list
```

## Running the Project

### Start the Application

Run the main calculator application:

```bash
npm start
```

Expected output:
```
The result of adding 2 and 3 is: 5
The result of dividing 15 by 5 is: 3
number
```

### Run Tests

Execute the Jest test suite to run all unit tests:

```bash
npm test
```

This will:
- Run all tests in the `__tests__/` directory
- Display test results with pass/fail status
- Show code coverage information

#### Running Specific Tests

To run tests for a specific file:

```bash
npm test -- calculator.test.js
```

To run tests matching a pattern:

```bash
npm test -- --testNamePattern="add"
```

## Features

### Calculator Functions

#### `add(a, b)`
Adds two numbers together.
- **Parameters**: Two numbers
- **Returns**: Sum of the two numbers
- **Throws**: Error if inputs are not valid numbers

#### `divide(a, b)`
Divides the first number by the second number.
- **Parameters**: Two numbers (divisor cannot be zero)
- **Returns**: Result of division
- **Throws**: 
  - Error if divisor is zero
  - Error if inputs are not valid numbers

### Test Coverage

The test suite includes:

**Add Function Tests (3 tests)**
- Adding two positive numbers
- Adding two negative numbers
- Error handling for non-numeric inputs (strings, null, undefined, NaN, arrays, objects)

**Divide Function Tests (12 tests)**
- Dividing two positive numbers
- Dividing mixed sign numbers
- Dividing two negative numbers
- Division by zero error handling
- Non-numeric input validation (strings, null, undefined, NaN, arrays, objects)
- Edge cases (0 ÷ 0, NaN handling)

**Total: 15 test cases**

## Configuration Files

### `jest.config.js`
Jest configuration file that sets up the testing environment. Currently configured to work with ES modules.

### `.gitignore`
Specifies files and folders to ignore in version control:
- `node_modules/` - Dependency directory
- `package-lock.json` - Lock file

## Development Workflow

1. **Make changes** to calculator functions in `src/`
2. **Run tests** to verify functionality: `npm test`
3. **Start application** to test manually: `npm start`
4. **Commit changes** to git when tests pass

## Troubleshooting

### Module Not Found Error
If you see `ERR_MODULE_NOT_FOUND`, ensure:
- All import statements include the `.js` file extension
- File paths are correct relative to the importing file

### Tests Not Running
- Ensure Jest is installed: `npm install`
- Check Node.js version: `node --version` (should be v14+)
- Run with verbose output: `npm test -- --verbose`

### Port Already in Use
If running a local server, check which process is using the port and terminate it, or use a different port.

## Best Practices

- ✅ Write tests before implementing features (TDD)
- ✅ Keep test cases focused and independent
- ✅ Use descriptive test names
- ✅ Test both happy path and error cases
- ✅ Maintain code coverage above 80%

---

For more information on Jest, visit: [Jest Documentation](https://jestjs.io/)
