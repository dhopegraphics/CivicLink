import React, { createContext, useContext, useState } from "react";
import { permissions } from "../data/PermissionsTable";
import { currentUser } from "../data/UsersTable";

// Create the context
const PermissionsContext = createContext();

// Provider component
export const PermissionsProvider = ({ children }) => {
  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        currentUser,
      }}
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
