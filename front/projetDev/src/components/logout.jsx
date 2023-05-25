import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";

export function Logout() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const { access_token } = queryString.parse(window.location.search);

    if (access_token) {
      setAccessToken(access_token);
    }
  }, []);

  const handleLogout = () => {
    window.history.replaceState({}, document.title, "/");
    setAccessToken("");
    window.location.replace("http://localhost:3000");
  };

  return (
    <div>
      <div>
        <p>Access Token: {accessToken}</p>
        <button onClick={handleLogout}>Déconnexion</button>
      </div>
    </div>
  );
}
