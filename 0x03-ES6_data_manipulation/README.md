# 0x03-ES6 Data Manipulation

Welcome to the 0x03-ES6 Data Manipulation project! In this project, you will learn how to manipulate data using modern JavaScript (ES6) features and techniques. This includes working with arrays, objects, and various ES6 methods to process and transform data efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Setup](#setup)
- [Tasks](#tasks)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Data manipulation is a critical skill in programming, especially when dealing with large datasets or working on data-driven applications. ES6 introduced several powerful features that make data manipulation in JavaScript easier and more efficient. This project will cover some of these features and how to use them effectively.

## Learning Objectives

By the end of this project, you should be able to:

- Understand and use various ES6 methods for data manipulation.
- Work with arrays and objects to filter, map, reduce, and transform data.
- Use spread operators and rest parameters.
- Understand and implement destructuring assignments.
- Utilize ES6 features to write clean and concise code for data manipulation tasks.

## Requirements

- Node.js (version 12.x or higher)
- A code editor (e.g., Visual Studio Code, Sublime Text)
- ESLint for code linting

## Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/cruso003/alx-backend-javascript.git
   cd alx-backend-javascript
   ```

2. **Navigate to the project directory**:
   ```sh
   cd 0x03-ES6_data_manipulation
   ```

3. **Install dependencies**:
   Ensure you have Node.js installed, then run:
   ```sh
   npm install
   ```

## Tasks

### Task 0: Basic List of Objects

#### Description

Create a function named `getListStudents` that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

#### Implementation

- Create a file named `0-get_list_students.js`.
- Implement the function `getListStudents`.

Example:
```javascript
export default function getListStudents() {
  return [
    { id: 1, firstName: 'John', location: 'San Francisco' },
    { id: 2, firstName: 'Doe', location: 'Los Angeles' },
    { id: 3, firstName: 'Jane', location: 'San Diego' },
  ];
}
```

### Task 1: More Mapping

#### Description

Create a function named `getListStudentIds` that returns an array of ids from a list of object students.

#### Implementation

- Create a file named `1-get_list_student_ids.js`.
- Implement the function `getListStudentIds`.

Example:
```javascript
export default function getListStudentIds(list) {
  return list.map(student => student.id);
}
```

### Task 2: Filter

#### Description

Create a function named `getStudentsByLocation` that returns an array of objects who are located in a specific city.

#### Implementation

- Create a file named `2-get_students_by_location.js`.
- Implement the function `getStudentsByLocation`.

Example:
```javascript
export default function getStudentsByLocation(list, city) {
  return list.filter(student => student.location === city);
}
```

### Task 3: Reduce

#### Description

Create a function named `getStudentIdsSum` that returns the sum of all the student ids.

#### Implementation

- Create a file named `3-get_student_ids_sum.js`.
- Implement the function `getStudentIdsSum`.

Example:
```javascript
export default function getStudentIdsSum(list) {
  return list.reduce((sum, student) => sum + student.id, 0);
}
```

### Task 4: Combine

#### Description

Create a function named `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

#### Implementation

- Create a file named `4-update_grade_by_city.js`.
- Implement the function `updateStudentGradeByCity`.

Example:
```javascript
export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter(student => student.location === city)
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
    });
}
```

## Resources

Here are some additional resources to help you with ES6 data manipulation:

- [MDN Web Docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info: Arrays](https://javascript.info/array)
- [JavaScript.info: Destructuring assignment](https://javascript.info/destructuring-assignment)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

## Contributing

We welcome contributions to this project! If you have any suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

Happy coding! 🚀

---

If you have any questions or need further assistance, feel free to reach out to the community or the repository maintainers.