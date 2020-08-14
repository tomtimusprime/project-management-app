import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { API } from "../../../../../utils/API";
const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
      try {
        logout({ returnTo: window.location.origin });
        await API.deleteCookie();
      } catch (error) {
          console.error(error)
      }
  };

  return (
    <Button variant="danger" type="submit" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
