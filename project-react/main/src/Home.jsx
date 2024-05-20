import { useContext } from 'react';
import { BalanceContext } from './BalanceContext';

function Home() {
  const { balance } = useContext(BalanceContext);

  return (
    <div className='home-flex'>
      <div className='home-card'>
        <div>
          <p>Saldo Atual</p>
          <h2>{balance}</h2>
        </div>
        <p>KZ</p>
      </div>
    </div>
  );
}

export default Home;