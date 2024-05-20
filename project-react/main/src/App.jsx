import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Transactions from './Transactions';
import { BalanceContextProvider } from './BalanceContext';

import './App.css';

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li>
        <Link to="/">Pagina Inicial</Link>
        </li>
        <li>
          <Link to="/transactions">Transações</Link>
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
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </BalanceContextProvider>
  );
}

export default App;