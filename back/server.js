const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
require("dotenv").config();

const app = express();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, PORT } = process.env;

app.get("/login", (req, res) => {
  const scope = "user-read-private user-read-email"; // Ajoutez les scopes supplémentaires nécessaires

  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: "code",
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI,
    })}`
  );
});

app.get("/callback", async (req, res) => {
  const { code } = req.query;

  const data = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify(data)
    );
    const { access_token, refresh_token } = response.data;

    const profileResponse = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const { email } = profileResponse.data;

    res.redirect(
      `http://localhost:3000?access_token=${access_token}&refresh_token=${refresh_token}&email=${email}`
    );
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
