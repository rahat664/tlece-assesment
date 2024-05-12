# TleceAssesment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Structure

The project is divided into 2 main components:
1. **Dashboard**: This component is the main component of the application. It is the first component that is loaded when the application is started. It contains the navigation bar and the main content of the application.
2. **login**: This component is responsible for the login functionality of the application. It contains the login form and the login button.

## Features

1. **Login**: The application has a login functionality. The user can login using the login form. The user can login using the following credentials:
    - If the user enters the correct credentials, the user will be redirected to the dashboard page.
    - If the user enters the wrong credentials, an error message will be displayed.
    - User can also login using google account.

2. **Dashboard**: The dashboard page contains the navigation bar and the main content of the application. In Dashboard, the user can see the following:
  - Navigation Bar: The navigation bar contains the following links:
    - Title: The title of the application is displayed on the navigation bar.
    - Bar: The bar is displayed on the right side of the navigation bar. It contains the following links:
      - Logout: The logout link is displayed on the navigation bar. When the user clicks on the logout link, the user will be redirected to the login page.
    - Date: The current date is displayed on the dashboard.
    - Live-Jobs-card: This card displays the number of live jobs.
    - Total-applicants-card: This card displays the total number of applicants.
  - Matched-applicants-card: This card displays the number of matched applicants. This will show 5 matched applications in beginning, after clicking on see more button it will show all matched applicants.
