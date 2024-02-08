import { createContext, useContext } from "react";


export const IncomeExpenseContext = createContext({
    transactions: [],
    income: 0,
    expense: 0,
    getTransactions: (trans) => {},
    deleteTransaction: (id) => {},
    showIncomeExpense: () => {},
    clearAllTransaction: () => {}
});

export const TransactionProvider = IncomeExpenseContext.Provider;

export const useIncomeExpenseContext = () => {
    return useContext(IncomeExpenseContext);
}