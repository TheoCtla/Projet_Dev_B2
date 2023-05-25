import React from "react";

const AccessTokenContext = React.createContext({
  accessToken: "",
  email: "",
});

export default AccessTokenContext;
