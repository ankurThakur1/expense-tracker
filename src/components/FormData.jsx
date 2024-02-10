import React, { useState } from 'react';
import "../style/formData.css";
import { useIncomeExpenseContext } from '../context/IncomeExpenseContext';

const FormData = ({ setShowForm }) => {
    const [amount, setAmount] = useState();
    const [description, setDescription] = useState("");
    const [selectType, setSelectType] = useState("income");
    const { getTransactions } = useIncomeExpenseContext();


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!amount || !description || !selectType){
            alert("Please enter all fields");
        }
        else{
            getTransactions({
                amount: Number(amount),
                description: description,
                selectType: selectType
            });
            setShowForm(false);
        }
    }

    
  return (
    <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className="select-container" value={selectType} onChange={(e) => setSelectType(e.target.value)}>
            <select name="selectType" >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <div className="cursor">&#9662;</div>
        </div>
        <button type="submit" className="btn">Add Transaction</button>
    </form>
  )
}

export default FormData;