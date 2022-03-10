import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Heading from './components/Heading';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';


function App() {
  return (
    <div className='app-container'>
      <Heading / >
        <div>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
    </div>
  );
}

export default App;
