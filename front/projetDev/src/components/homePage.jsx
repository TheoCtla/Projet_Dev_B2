import React, { useContext, useEffect, useState } from "react";
import { Profile } from "./profile";
import { DisplayGenre } from "./displayGenre";
import { text } from "express";

export function Home({ accessToken }) {
  return (
    <>
      <div>Home Page</div>
      <Profile accessToken={accessToken} />
      <DisplayGenre accessToken={accessToken} />
    </>
  );
}
