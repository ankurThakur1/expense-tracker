import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import { useIncomeExpenseContext } from '../context/IncomeExpenseContext';

const Records = ({ transaction }) => {
    const { deleteTransaction } = useIncomeExpenseContext();
  return (

    <div className={`record ${transaction.selectType === "income" ? "in" : "out"}`}>
        <h5>{transaction.description}</h5>
        <div className="prices">
            <span className="amt">₹{transaction.amount}</span>
            <button className="delete" onClick={() => deleteTransaction(transaction.id)}><FaRegTrashAlt /></button>
        </div>
    </div>
  )
}

export default Records;