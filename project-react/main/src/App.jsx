import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Home from './Home';
import Transactions from './Transactions';
import { BalanceContextProvider } from './BalanceContext';

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Transactions</Link>
        </li>
        <li>
          <Link to="/transactions">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BalanceContextProvider>
     <BrowserRouter>
     <NavigationMenu />
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/transactions" element={<Home />} />
        </Routes>
      </BrowserRouter> 
    </BalanceContextProvider>
  );
}

export default App;