[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](license)

# Authentication for Project Three
This project showcases how to add authentication using `Auth0` library. Template for this project is the starter template given for Project Three.

`Auth0` allows you to add authentication to your React application quickly and to gain access to user profile information. It allows to add authentication to many other platforms. More details [here](https://auth0.com/docs/quickstarts).

---

## Usage

You are most welcome to use this project as a starter code for your project-3. You have my full permission, and blessing.

To show this, I've published this project as a github *template* project. On the top, next to `Code` button you will see a green `Use this template` button. This will allow you to create your own project based off this starter code project. So instead of cloning or forking, that is what I will recommend doing.

---

## Installation

1. Clone this repository.
    ```
    git clone https://github.com/sdanyalk/auth-project-three.git
    ```
1. Navigate into the cloned directory.
    ```
    cd auth-project-three
    ```
1. Install Nodejs dependencies.
    ```
    npm install
    ```
1. Add `.env` file inside `client` folder, with the following configuration.
    ```
    REACT_APP_DOMAIN=
    REACT_APP_CLIENT_ID=
    REACT_APP_AUDIENCE=
    ```
1. The values for the above config variables can be found from the Auth0 dashboard.

1. In the root directory of the project, start the application.
    ```
    npm start
    ```
1. In your browser navigate to the following page.
    ```
    http://localhost:3000
    ```
1. The following test id can be used to login:
    
    user id: `test@test.com`

    password: `P@ssword`
---

## Notes 
- Auth0 has really good and easy to follow documentation to setup authentication quickly. They also have video tutorial on their site.

- Auth0 allows to add authentication to different platforms. More information [here](https://auth0.com/docs/quickstarts).

- I followed the following documentation and example(s) to create this project:

- https://auth0.com/docs/quickstart/spa/react

- https://auth0.com/blog/complete-guide-to-react-user-authentication/#Connect-React-with-Auth0

- https://github.com/auth0-samples/auth0-react-samples/tree/master/Sample-01

- DO NOT upload any of the `Auth0` configurations to github.

- Add them to local `.env` file and then add it to `.gitignore` so that the `.env` file is not uploaded to github.

- Add `Auth0` configurations to Heroku `Config Vars`.

---

## Heroku Deployment

This project is deployed on Heroku. The link to web app is:

[https://auth-project-three.herokuapp.com/](https://auth-project-three.herokuapp.com/)

---

## Nice to have

- [ ] Secure the API endpoints by using access token.
- [ ] Add Jest unit tests.

---

## Issues/Bugs

Please report any bugs [here](https://github.com/sdanyalk/auth-project-two/issues).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
