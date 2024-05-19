// Transactions.js
import { useState, useContext, useRef, useReducer, useEffect } from 'react';
import { BalanceContext } from './BalanceContext';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + action.amount;
    case 'subtract':
      return state - action.amount;
    default:
      throw new Error();
  }
}

function Transactions() {
  const [amount, setAmount] = useState(0);
  const { balance, setBalance } = useContext(BalanceContext);
  const amountRef = useRef();
  const [state, dispatch] = useReducer(reducer, balance);

  useEffect(() => {
    setBalance(state);
    amountRef.current = amount;
  }, [state, amount]);

  const addTransaction = () => {
    dispatch({ type: 'add', amount: Number(amount) });
  };

  const subtractTransaction = () => {
    dispatch({ type: 'subtract', amount: Number(amount) });
  };

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={addTransaction}>Adicionar</button>
      <button onClick={subtractTransaction}>Subtrair</button>
    </div>
  );
}

export default Transactions;
