# Auto Delete Todo List & User Data Summary

This project consists of two main features:

1. **Auto Delete Todo List** – A Todo list that auto-deletes items after a specified time or when clicked in a category column.
2. **User Data Summary** – An API integration that fetches user data, groups it by department, and provides summaries such as gender count, age range, and hair color.

## Project Setup

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v14.x or later)
- **npm** (Node Package Manager)
- **TypeScript** (v4.x or later)
- **Jest** (for running tests)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sunthorn9rk/auto-delete-todo-list.git
   cd auto-delete-todo-list
   ```

2.Install dependencies:

```bash
   npm install
```

## Features

1. Auto Delete Todo List
   The Auto Delete Todo List displays a list of clickable items categorized as either Fruit or Vegetable. Here's how it works:

Main List: Items are listed initially in the main column.

Move to Category: Clicking an item will move it to either the Fruit or Vegetable column, based on its type.

Auto Move Back: After 5 seconds, the item will move back to the bottom of the main list automatically.

Manual Move Back: If an item in the category column is clicked, it will immediately move back to the main list.

### Usage

Click on an item in the main list to move it to the appropriate column (Fruit/Vegetable).

The item will stay in the selected column for 5 seconds before automatically moving back to the main list.

You can also manually click items in the category columns to move them back to the main list.

###Running the App
To run the app locally:

1. Start the development server:

```bash
npm run dev
```

2. Open the app in your browser at http://localhost:3000.

## 2. User Data Summary

This page fetches user data from an external API (https://dummyjson.com/users), processes the data, and displays the following summary for each department:

Male/Female Count: Total number of males and females per department.
Age Range: Age range (e.g., "25-30") per department.
Hair Color Summary: Count of each hair color per department.
Postal Code Mapping: A mapping of user full names to postal codes.
Data Transformation
The data from the API is transformed into a grouped structure by department, with summarized information such as:

{
"Engineering": {
"male": 5,
"female": 3,
"ageRange": "25-35",
"hair": {
"Black": 4,
"Blond": 2,
"Brown": 1
},
"addressUser": {
"JohnDoe": "12345"
}
},
"HR": {
// Similar data structure
}
}

## Running Tests with Jest

This project uses Jest for unit testing. The tests ensure that the functionality works correctly and to validate edge cases.

### Running Tests

1. Install Jest dependencies:

```bash
npm install --save-dev jest @types/jest ts-jest
```

2. Run the tests:

```bash
npx jest
```

3. If you want to run tests in watch mode (to automatically re-run tests on file changes):

```bash
npx jest --watch
```

## Technologies Used

Next.js: React framework for building server-rendered applications.

TypeScript: A superset of JavaScript for static type checking.

Jest: Testing framework to ensure the correctness of the app.

TailwindCSS: Utility-first CSS framework for styling.
License

## This project is licensed under the MIT License - see the LICENSE file for details.
