import React from "react";
import Guest from "../Guest/Guest";
import Profile from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <Profile user={user} /> : <Guest />}
        </>
    );
};

export default Home;