import { useContext } from 'react';
import { BalanceContext } from './BalanceContext';

function Home() {
  const { balance } = useContext(BalanceContext);

  return (
    <div>
      <h2>Saldo Atual</h2>
      <p>{balance}</p>
    </div>
  );
}

export default Home;