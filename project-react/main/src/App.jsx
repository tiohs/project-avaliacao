import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Transactions from './Transactions';
import { BalanceContextProvider } from './BalanceContext';

function App() {
  return (
    <BalanceContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/transactions" component={Transactions} />
        </Switch>
      </Router>
    </BalanceContextProvider>
  );
}

export default App;