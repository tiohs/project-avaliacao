// BalanceContext.js
import { createContext, useState } from 'react';

export const BalanceContext = createContext();

export function BalanceContextProvider({ children }) {
  const [balance, setBalance] = useState(0);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
}