# Service-Oriented Architecture Assignment #3

## Description
NodeJS application to store employees data into JSON file through a RESTful API.

## Application Features
The program should allow users to perform the following actions:
* Add new employee to the database with validations on all input fields.
* Update employee details, all fields can be updated (except for EmployeeID).
* Search for an employee with EmployeeID or Designation and show the number of found employees.
* Delete certain employee using EmployeeID.

## JSON File Template
> The JSON file should look something like this
```json
[
  {
    "FirstName": "Sam",
    "LastName": "Jackson",
    "EmployeeID": 1000,
    "Designation": "Manager",
    "KnownLanguages": [
      {
        "LanguageName": "Java",
        "ScoreOutOf100": 90
      },
      {
        "LanguageName": "C#",
        "ScoreOutOf100": 50
      },
      {
        "LanguageName": "C++",
        "ScoreOutOf100": 80
      }
    ]
  }
]
```

## Project Structure

```
my-node-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the data controller
│   │   └── dataController.js
│   ├── routes                # Defines API routes
│   │   └── dataRoutes.js
│   ├── services              # Contains the data service
│   │   └── dataService.js
│   ├── data                  # JSON data file
│   │   └── data.json
│   └── utils                 # Utility functions
│       ├── fileUtils.js
│       └── validationsUtils.js
├── package.json              # NPM configuration file
├── .gitignore                # Specifies files to ignore in Git
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/iSeFz/SOA_A3.git
   ```

2. Navigate to the project directory:

   ```
   cd SOA_A3
   ```

3. Install Node.js if you haven't already:

   ```
   https://nodejs.org/en/download/
   ```

4. Install the dependencies:

   ```
   npm install
   ```

5. Run the application:

   ```
   nodemon --exec npm start
   ```

## Usage

To start the application, run:

```
node src/app.js
```

The API will be available at `http://localhost:3000`.

## API Endpoints

- `GET /employees` - Retrieve all employees
- `GET /lang-score` - Retrieve certain employees by language score
- `GET /search-employee` - Search for employee by EmployeeID or Designation
- `POST /new-employee` - Add new employee
- `PUT /update-employee/:id` - Update existing employee data
- `DELETE /delete-employee/:id` - Delete certain employee by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
