import React, { createContext, useContext, useState } from "react";
import { permissions } from "../data/PermissionsTable";

// Create the context
const PermissionsContext = createContext();

// Provider component
export const PermissionsProvider = ({ children }) => {
  const [userPermissions, setUserPermissions] = useState(permissions);

  return (
    <PermissionsContext.Provider
      value={{ userPermissions, setUserPermissions }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

// Custom hook to use the permissions context
export const usePermissions = () => {
  const context = useContext(PermissionsContext);
  if (!context) {
    throw new Error("usePermissions must be used within a PermissionsProvider");
  }
  return context;
};
