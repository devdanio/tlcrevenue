import { useState, useEffect, useContext } from "react";

import { AppContext } from "~/providers/AppProvider";

export const useVersion = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return { version: context.version, setVersion: context.setVersion };
};
