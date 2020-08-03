import React from "react";
import Guest from "./components/Guest/Guest";
import Profile from "./components/Profile/Profile";
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