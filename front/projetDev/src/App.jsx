import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Profile } from "./components/homePage";
import { Login } from "./components/login";

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [email, setEmail] = useState("");

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Profile accessToken={accessToken} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
