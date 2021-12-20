import React from "react";

const UserContext = React.createContext("Capt. JackSparrow");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
