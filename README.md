# Service-Oriented Architecture Assignment #3

## Description
Java web application to store university students data to a JSON file.

## Application Features
The program should allow users to perform the following actions:
* Add new employee to the database with validations on all input fields.
* Update employee details, all fields can be updated (except for EmployeeID).
* Search for an employee with EmployeeID or Designation and show the number of found employees.
* Sort the data file using any of the employee attributes based on the user input.
* Delete certain employee using EmployeeID.

## JSON File Template
> Employees.json file should look something like this
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
