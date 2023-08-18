import { createContext } from "react";

interface UserType {
  id: number, 
  name: string
}

export const UserContext = createContext<UserType | null>(null);
