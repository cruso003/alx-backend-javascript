# 0x02-ES6_classes

Welcome to the 0x02-ES6_classes module! This module focuses on ES6 classes, a key feature in ECMAScript 6 (ES6) that provides a more intuitive and structured way to work with objects and inheritance in JavaScript.

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
- Understand the purpose and benefits of ES6 classes
- Define and use classes and class methods
- Implement inheritance using the `extends` keyword
- Use `super` to call parent class methods
- Understand static methods and how to define them
- Use getters and setters for class properties
- Understand and implement encapsulation in classes

## Prerequisites
Before starting this module, ensure you have the following installed:
- Node.js (v12.11.x or later)
- npm (v6.11.3 or later)
- A code editor (e.g., Visual Studio Code)

## Resources
Read or watch the following resources to gain a better understanding of ES6 classes:
- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Class](https://javascript.info/class)
- [Understanding Classes in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
- [ES6 Classes](https://www.tutorialsteacher.com/es6/es6-classes)

## Tasks
This module includes a series of tasks designed to help you learn and practice working with ES6 classes. Each task is contained within a separate file. Here are the tasks you need to complete:

1. **Task 0: Initialize a class**
   - File: `0-classroom.js`
   - Description: Define a class named `Classroom`.

2. **Task 1: Let's make some shapes**
   - File: `1-shapes.js`
   - Description: Define a class named `Rectangle` and a class named `Square` that extends `Rectangle`.

3. **Task 2: Use static methods**
   - File: `2-static.js`
   - Description: Define a class with a static method.

4. **Task 3: Make a rectangle smarter**
   - File: `3-getters_setters.js`
   - Description: Add getters and setters to a class.

5. **Task 4: Summary**
   - File: `4-summary.js`
   - Description: Create a summary class that includes multiple methods and properties.

## Getting Started
1. **Navigate to the module directory:**
   ```sh
   cd 0x02-ES6_classes
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