import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Logout } from "./logout";

export function Profile({ accessToken }) {
  const [profile, setProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error:", error.response.data);
      }
    };

    if (accessToken) {
      fetchProfile();
    }
  }, [accessToken]);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button className="profile-button" onClick={toggleMenu}>
        Profile
      </button>
      {isOpen && (
        <div className="menu">
          <h2>Profile</h2>
          <p>Name: {profile.display_name}</p>
          <p>Email: {profile.email}</p>
          <p>Country: {profile.country}</p>
          <Logout />
        </div>
      )}
    </div>
  );
}
