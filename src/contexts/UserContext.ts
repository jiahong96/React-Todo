import { createContext, useContext } from "react";

interface UserType {
  id: number, 
  name: string
}

// defaultValue: The value that you want the context to have when there is no matching context provider
// in the tree above the component that reads context. If you don’t have any meaningful default value, specify null.
// The default value is meant as a “last resort” fallback.
// It is static and never changes over time.
// https://react.dev/reference/react/createContext#parameters

export const UserContext = createContext<UserType | null>(null);

export const useUserContext = () => {
  return useContext(UserContext);
};




