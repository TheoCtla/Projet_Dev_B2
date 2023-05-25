import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <a href="http://localhost:3001/login">Se connecter avec Spotify</a>
    </div>
  );
}

//   fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " +
//         btoa(
//           "cbbd251851dd4e98ba82e7136d996a06" +
//             ":" +
//             "bde575e421964f0e839724fb7603475b"
//         ),
//     },
//     body: "grant_type=client_credentials",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const accessToken = data.access_token;
//       console.log(data);
//       // Utiliser l'accessToken pour appeler l'API de Spotify
//     })
//     .catch((error) => console.error(error));
