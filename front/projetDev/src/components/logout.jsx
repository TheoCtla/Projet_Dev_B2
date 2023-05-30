import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";

export function Logout() {
  const handleLogout = () => {
    window.history.replaceState({}, document.title, "/");
    window.location.replace("http://localhost:3000");
  };

  return (
    <div>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}
