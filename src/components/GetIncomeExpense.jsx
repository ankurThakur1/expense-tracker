import React, { useState } from 'react';
import "../style/getIncomeEx.css";
import FormData from './FormData';
import { useIncomeExpenseContext } from '../context/IncomeExpenseContext';
import Chart from './Chart';

const GetIncomeExpense = () => {
    const [showForm, setShowForm] = useState(false);
    const [view, setView] = useState(false);
    const { income, expense } = useIncomeExpenseContext();
    console.log("income: ", income);
    console.log("expense: ", expense); 
    console.log(view);

    const data = {
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: "Amount in ₹",
          data: [income, expense],
          borderWidth: 0,
          backgroundColor: ["#dfff29", "#D95858"]
        }
      ]
    }

  return (
    <div className="upper-section">
      <div className="balance">
        <h3>Balance: <span className={income < expense ? "neg" : "pos"}>₹{income - expense}</span></h3>
        <button className="btn" onClick={() => setShowForm(!showForm)}>{showForm ? "Cancel" : "Add"}</button>
      </div>
      {
        showForm && <FormData setShowForm={setShowForm} />
      }
      <div className="show-expenses">  
        <div className="income">
            <span>Income</span>
            <span className="inc-amt" onClick={() => setView(!view)}>{view ? `₹${income}` : "View Income"}</span>
        </div>
        <div className="expense">
            <span>Expense</span>
            <span className="exp-amt">₹{expense}</span>
        </div>
      </div>
      <Chart data={data} />
    </div>
  )
}

export default GetIncomeExpense;