# Employee Management System with JWT - Frontend and Backend

Link- https://employee-jwt.netlify.app/

This is the README document for the Employee Management System project, which consists of both frontend and backend components. The project is designed to manage employee records securely using JWT (JSON Web Token) for authentication and authorization. The backend is built with Spring Boot and the frontend is developed using Angular.

## Table of Contents

- [Project Overview](#project-overview)
- [Backend Technologies](#backend-technologies)
- [Frontend Technologies](#frontend-technologies)
- [Features](#features)
- [Deployment](#deployment)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This Employee Management System is a web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records. The system ensures data security and integrity by implementing JWT-based authentication and authorization.

### Backend Technologies

The backend of the project is built using Spring Boot and utilizes the following technologies and libraries:

- **Spring Data JPA**: For data access and management.
- **Spring Boot Starter Validation**: For request validation.
- **JSON Web Token (JWT)**: For authentication and authorization.
- **Spring DevTools**: For easier development and hot-reloading.
- **H2 Database**: In-memory database for development purposes.

### Frontend Technologies

The frontend is developed using Angular and incorporates the following technologies and libraries:

- **Angular Framework**: For building a responsive and dynamic user interface.
- **Angular Material (Mat)**: A UI component library for a sleek and modern design.
- **Bootstrap**: For additional styling and responsiveness.
- **Interceptor**: Implemented for handling JWT authentication.
- **Guard**: To prevent unauthorized access and ensure data integrity.

## Features

- **User Authentication**: Users must log in to access the system, and JWT tokens are generated and verified for secure authentication.
- **Employee CRUD Operations**: Create, Read, Update, and Delete employee records.
- **Data Validation**: Request data is validated on the backend to ensure data integrity.
- **JWT Authorization**: Only authorized users can perform CRUD operations.
- **Interception and Guarding**: Unauthorized access is blocked by interceptors and guards on the frontend.
- **Demo Data**: Sample data is provided for testing purposes.

## Deployment

The project is deployed using the following platforms:

- **Backend**: Deployed on Railway.
- **Frontend**: Deployed on Netlify.

## Demo

You can access the live demo of this project [here](#insert-demo-link).

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend.git
   ```

2. Navigate to the backend and frontend directories and follow the instructions in their respective README files for setup.

3. Configure the backend and frontend to work together by setting the appropriate API endpoints.

4. Run both the backend and frontend locally for testing and development.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow the [contribution guidelines](CONTRIBUTING.md).


Output Screenshot of the Application

1.Frontend File Structure
![Frontend File Structure](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/4e6b6d82-5acd-411c-9dd5-dbcdb27e8263)

2. Backend File Structure
![Backend File Structure](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/4f3373ec-3bb9-4da8-aee7-844edec87a70)

3.Backend Service Running on Railway Cloud using Docker
![Backend service Running on Railway](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/0d0c9b49-839b-43a0-b5ea-2f7b864068c1)


4. Integrated MySql on Railway
![Integrated MySql on Railway](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/bb2dc5d9-020b-498a-8704-87643558a2d5)



5. Frontend Running on netlify
![Frontend on Netlify](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/b9213407-72c8-4f94-98ef-493f794226c5)


6. Backend Service Running of SpringBoot
![Backend Service Running of Spring Boot](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/d66018d6-312c-4b77-9b0a-f63287a30d71)

7. Default HomePage
![Default Home Page](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/f2b3f532-77dc-434f-bd51-196ef39610ba)


8. Login Interface
![Login Interface](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/49054b96-ed82-4608-8a3a-3c93f87a06c0)

9.After Login 
![After Login](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/2d947e48-752b-4061-b9e2-f60d10f0c474)


10. Add Employee After Login Successfully
![Add Employee After Login](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/f9bcf1b4-54ec-4eca-83f0-0d35a2417480)

11. Added Succesfully
![Added Successfully](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/6e8110a5-fc90-476d-9a21-d1d0236999ac)

12. Without Login Attempt for Update
![without login Attempt for Update](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/92560e74-5169-471e-b3db-8fe017546f75)

13. Unauthorised Error Occur if You are trying to update Without Login
![Unauthorised Error](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/098ccf55-d5ac-4107-a14d-9860c5fab279)


14. Update Employee After Login
![Update Employee After Login](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/8e1feadb-2998-4348-8b43-0a796f2bfd07)


15. Update Employee Data Successfullt
![Update Employee Data Successfully](https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend./assets/55205232/51688626-4799-45e3-a092-3af968a0961d)







## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the Employee Management System. If you encounter any issues or have suggestions for improvement, please feel free to open an issue on the GitHub repository. Happy coding!
