import GetIncomeExpense from '../components/GetIncomeExpense';
import ShowTransaction from '../components/ShowTransaction';
import "../style/trackerApp.css";

const TrackerApp = () => {
  return (
    <div className="trackerApp">
      <div className="tracker">
        <h1>Expense Tracker</h1>
        <GetIncomeExpense />
        <ShowTransaction />
      </div>
    </div>
  )
}

export default TrackerApp;