import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export function DisplayGenre(accessToken) {
  const [genres, setGenres] = useState(null);

  console.log(accessToken.accessToken);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/recommendations/available-genre-seeds",
          {
            headers: {
              Authorization: `Bearer ${accessToken.accessToken}`,
            },
          }
        );
        setGenres(response.data);
      } catch (error) {
        console.error("Error:", error.response.data);
      }
    };
    if (accessToken) {
      fetchGenre();
    }
  }, [accessToken]);

  const affiche = () => {
    if (genres && genres.genres.length > 0) {
      return genres.genres.map((genre, index) => (
        <button key={index} className="genre">
          {genre}
        </button>
      ));
    }
    return null;
  };

  return (
    <>
      <div className="genres">{affiche()} </div>
    </>
  );
}
