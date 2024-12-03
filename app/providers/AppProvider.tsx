import React, { createContext, useContext } from "react";

// Define the context type
export type AppContextType = {
  version: "live" | "demo";
  setVersion: (version: "live" | "demo") => void;
};

// Create the context
export const AppContext = createContext<AppContextType | undefined>(undefined);
