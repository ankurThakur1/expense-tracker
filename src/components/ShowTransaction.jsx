import React, { useState } from 'react'
import "../style/showTrans.css";
import { IoIosSearch } from "react-icons/io";
import { useIncomeExpenseContext } from '../context/IncomeExpenseContext';
import Records from './Records';

const ShowTransaction = () => {
    const [search, setSearch] = useState("");
    const { transactions, clearAllTransaction } = useIncomeExpenseContext();

  return (
    <div className="lower-section">
      <h2>Transactions</h2>
      <div className="search-delete-container">
        <div className="search-container">
          <input type="text" placeholder="Search by description & amt..." className="search" value={search} onChange={(e) => setSearch(e.target.value)} />
          <IoIosSearch />
        </div>
        <div className="count">
          <button className="delete-all" onClick={() => clearAllTransaction()}>Clear All</button>
          <span className="length">Records : [{transactions.length}]</span>
        </div>
      </div>
      <div className="trans-container">
        {
          transactions.length > 0 ?
          (transactions.filter((item) => (
            item.description.toLowerCase().includes(search) ||
            item.amount.toString().includes(search)

          ))
          .map((transaction) => (
            <Records transaction={transaction} key={transaction.id} />

          ))) : (
            <div className="empty">
                <h3>No Transactions to Show!!</h3>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ShowTransaction;