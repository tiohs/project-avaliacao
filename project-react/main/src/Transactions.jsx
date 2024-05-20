// Transactions.js
import { useState, useContext, useRef, useReducer, useEffect } from 'react';
import { BalanceContext } from './BalanceContext';



function Transactions() {
  const [amount, setAmount] = useState(0);
  const { balance, setBalance, transactionDone, setTransactionDone } = useContext(BalanceContext);
  

  const amountRef = useRef();
  const [state, dispatch] = useReducer(reducer, balance);

  function reducer(state, action) {
    switch (action.type) {
      case 'debito':
        return state + action.amount;
      case 'credito':
        return state - action.amount;
    }
  }

  useEffect(() => {
    setBalance(state);
    amountRef.current = amount;
  }, [state, amount]);

  const addTransaction = () => {
    dispatch({ type: 'debito', amount: Number(amount) });
    setTransactionDone([{id: new Date().getTime(), type: 'debito', amount: Number(amount) }, ...transactionDone])
    setAmount(0);
  };

  const subtractTransaction = () => {
    dispatch({ type: 'credito', amount: Number(amount) });
    setTransactionDone([{ id: new Date().getTime(), type: 'credito', amount: Number(amount) }, ...transactionDone])
    setAmount(0);
  };

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={addTransaction}>Credito</button>
      <button onClick={subtractTransaction}>Debito</button>
      <div className='balance-list'>
        <div className='balance-header'>
          <h3>Quantidade </h3>
          <h3>Descrição </h3>
        </div>
        {
          transactionDone.map(item => (
            <div className='balance-body' key={item.id}>
                    <p>{ item.type == 'debito' ? '+' : '-'} {item.amount}</p>
                    <p>{item.type}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Transactions;
