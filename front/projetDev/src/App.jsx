import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import AccessTokenContext from "./components/AccessTokenContext";
import { Login } from "./components/login.jsx";
import { Logout } from "./components/logout.jsx";

import { Profile } from "./components/homePage";

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [email, setEmail] = useState(""); // Ajout de l'état pour l'adresse e-mail

  useEffect(() => {
    const { access_token, email } = queryString.parse(window.location.search);

    if (access_token) {
      setAccessToken(access_token);
    }

    if (email) {
      setEmail(email);
    }
  }, []);

  return (
    <BrowerRouter>
      <Routes></Routes>
    </BrowerRouter>
  );
};

export default App;
