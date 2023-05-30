import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/login.css";

export function Login() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Fonction pour échanger le code d'autorisation contre un jeton d'accès
    const getToken = async () => {
      const response = await axios.get("http://localhost:3001/callback", {
        params: {
          code: new URLSearchParams(window.location.search).get("code"),
        },
      });

      const { access_token } = response.data;
      setAccessToken(access_token);
    };

    getToken();
  }, []);

  return (
    <>
      <div id="particles-js"></div>
      <div class="login-box">
        <h2>Login with spotify</h2>
        <form>
          <div class="login">
            <a href="http://localhost:3001/login">Login</a>
          </div>
        </form>
      </div>
    </>
  );
}
