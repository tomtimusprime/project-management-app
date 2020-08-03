import React from "react";
import { Jumbotron } from "react-bootstrap";

const Guest = () => {
    return (
        <Jumbotron>
            <h1>Hello, Guest!</h1>
            <p>
                This is a simple authentication app using Auth0.
            </p>
            <p>
                Use the Log In button on top right to login and see your profile details.
            </p>
        </Jumbotron>
    );
};

export default Guest;