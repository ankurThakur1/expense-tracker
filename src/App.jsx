import { useEffect, useState } from 'react'
import './App.css'
import { TransactionProvider } from './context/IncomeExpenseContext';
import TrackerApp from './pages/TrackerApp';

function App() {
    const [transactions, setTranscations] = useState([]);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
     
    console.log(transactions);
 
    const getTransactions = (trans) => {
      setTranscations([
        ...transactions,
        {
          ...trans, 
          id: new Date()
        }
      ]);
    }

    const deleteTransaction = (id) => {
      const removeEntry = transactions.filter((trans) => ( trans.id !== id ));
      setTranscations(removeEntry);
    }

    
  const clearAllTransaction = () => {
    setTranscations([]);
  }


    const showIncomeExpense = () => {
      let income = 0;
      let expense = 0;

      transactions.map((trans) => (
        trans.selectType === "income" ? (income += trans.amount) : (expense += trans.amount),
        console.log(typeof trans.amount)
      ));
      setIncome(income);
      setExpense(expense);
    }
    console.log("income", income)
    console.log("expense",  expense)
    
    useEffect(() => {
      let trans = JSON.parse(localStorage.getItem("transaction"));
      
      if(trans && trans.length > 0){
        setTranscations(trans);
      }
    }, []);

    useEffect(() => {
      showIncomeExpense();
      localStorage.setItem("transaction", JSON.stringify(transactions));
    }, [transactions]);


  return (
    <TransactionProvider value={{transactions, income, expense, getTransactions, deleteTransaction, showIncomeExpense, clearAllTransaction}}>
      <TrackerApp />
    </TransactionProvider>
  )
}

export default App;

