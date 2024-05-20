import { createContext, useState } from 'react';

export const BalanceContext = createContext();

// eslint-disable-next-line react/prop-types
export function BalanceContextProvider({ children }) {
  const [balance, setBalance] = useState(0);
  const [transactionDone, setTransactionDone] = useState([]);

  return (
    <BalanceContext.Provider value={{ balance, setBalance, transactionDone, setTransactionDone }}>
      {children}
    </BalanceContext.Provider>
  );
}