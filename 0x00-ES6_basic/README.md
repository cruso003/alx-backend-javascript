# 0x00-ES6_basic

Welcome to the 0x00-ES6_basic module! This module introduces you to the fundamentals of ECMAScript 6 (ES6), also known as ECMAScript 2015. ES6 is a major update to JavaScript, bringing many new features and syntax improvements. This module will help you get comfortable with these new features and how to use them effectively in your JavaScript code.

## Table of Contents
- [Learning Objectives](#learning-objectives)
- [Prerequisites](#prerequisites)
- [Resources](#resources)
- [Tasks](#tasks)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration Files](#configuration-files)
- [Contributing](#contributing)
- [License](#license)

## Learning Objectives
By the end of this module, you should be able to explain and understand:
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Prerequisites
Before starting this module, ensure you have the following installed:
- Node.js (v12.11.x)
- npm (v6.11.3 or later)
- A code editor (e.g., Visual Studio Code)

## Resources
Read or watch the following resources to gain a better understanding of ES6:
- [ECMAScript 6 - ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://www.digitalocean.com/community/tutorials/understanding-es6-iterators-and-iterables)

## Tasks
This module includes a series of tasks designed to help you learn and practice ES6 features. Each task is contained within a separate file. Here are the tasks you need to complete:

1. **Task 0: Const or let**
   - File: `0-constants.js`
   - Description: Learn how to use `const` and `let` to declare variables.

2. **Task 1: Block scope**
   - File: `1-block-scoped.js`
   - Description: Understand block-scoped variables with `let` and `const`.

3. **Task 2: Arrow functions**
   - File: `2-arrow.js`
   - Description: Write arrow functions for concise syntax.

4. **Task 3: Parameter defaults**
   - File: `3-default-parameter.js`
   - Description: Use default parameters in functions.

5. **Task 4: Rest parameter and spread operator**
   - File: `4-rest-spread.js`
   - Description: Work with rest parameters and the spread operator.

6. **Task 5: Template literals**
   - File: `5-template-literals.js`
   - Description: Use template literals for string interpolation.

7. **Task 6: Object property shorthand**
   - File: `6-object-property.js`
   - Description: Use shorthand syntax for object properties.

8. **Task 7: Destructuring**
   - File: `7-destructuring.js`
   - Description: Destructure arrays and objects to extract values.

9. **Task 8: Classes**
   - File: `8-classes.js`
   - Description: Understand and create classes in ES6.

## Getting Started
1. **Navigate to the module directory:**
   ```sh
   cd 0x00-ES6_basic
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the code:**
   You can run each JavaScript file using Node.js:
   ```sh
   node path/to/your/file.js
   ```

## Usage
Follow the instructions in each task file to complete the exercises. Use the code examples and comments to guide you. After completing a task, you can run the file to see the results and verify your solutions.

## Configuration Files
Add the following configuration files to your project directory to set up Jest, Babel, and ESLint:

### `package.json`
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### `babel.config.js`
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

Finally, run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Contributing
We welcome contributions to improve this module. If you have any suggestions or improvements, please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

Happy coding! 🚀

---

If you have any questions or need further assistance, feel free to reach out to the community or the repository maintainers.