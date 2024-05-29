# 0x01-ES6_promise

Welcome to the 0x01-ES6_promise module! This module focuses on Promises in ECMAScript 6 (ES6), a powerful feature that helps manage asynchronous operations in JavaScript. Promises provide a cleaner, more robust way to handle asynchronous code compared to traditional callback-based approaches.

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
By the end of this module, you should be able to:
- Understand what a Promise is and why it is useful
- Create and use Promises
- Handle asynchronous operations using `then`, `catch`, and `finally`
- Chain multiple Promises together
- Use `Promise.all`, `Promise.race`, `Promise.resolve`, and `Promise.reject`
- Convert callback-based functions to Promises

## Prerequisites
Before starting this module, ensure you have the following installed:
- Node.js (v12.11.x or later)
- npm (v6.11.3 or later)
- A code editor (e.g., Visual Studio Code)

## Resources
Read or watch the following resources to gain a better understanding of ES6 Promises:
- [JavaScript Promises: An Introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [JavaScript.info: Promises](https://javascript.info/promise-basics)
- [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promise Methods - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Methods)

## Tasks
This module includes a series of tasks designed to help you learn and practice working with Promises. Each task is contained within a separate file. Here are the tasks you need to complete:

1. **Task 0: Keep every promise you make and only make promises you can keep**
   - File: `0-promise.js`
   - Description: Create a simple Promise.

2. **Task 1: Don't make a promise...if you know you can't keep it**
   - File: `1-promise.js`
   - Description: Return a Promise that resolves or rejects based on a boolean value.

3. **Task 2: Catch me if you can!**
   - File: `2-then.js`
   - Description: Chain Promises using `then`.

4. **Task 3: Handle multiple promises**
   - File: `3-all.js`
   - Description: Use `Promise.all` to handle multiple Promises.

5. **Task 4: Race to settle**
   - File: `4-race.js`
   - Description: Use `Promise.race` to handle the first Promise that settles.

6. **Task 5: Trust the process**
   - File: `5-promisify.js`
   - Description: Convert a callback-based function to return a Promise.

## Getting Started
1. **Navigate to the module directory:**
   ```sh
   cd 0x01-ES6_promise
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
### `utils.js`
```js
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
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