import { useEffect, useState } from "react";
import { getAccounts, updateAccountBalance } from "../backend/accountsService";
import { getExpenses, addExpense } from "../backend/expensesService";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesList from "../components/ExpensesList";

export default function Expenses() {
  const [accounts, setAccounts] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setAccounts(getAccounts());
    setExpenses(getExpenses());
  }, []);

  const handleAdd = (expense) => {
    // Add expense
    const updatedExpenses = addExpense(expense);
    setExpenses(updatedExpenses);

    // Subtract from account
    const account = accounts.find((a) => a.id === expense.accountId);
    const newBalance = account.balance - expense.amount;
    const updatedAccounts = updateAccountBalance(account.id, newBalance);

    setAccounts(updatedAccounts);
  };

  return (
    <div>
      <h2>Expenses</h2>
      <ExpenseForm accounts={accounts} onAdd={handleAdd} />
      <ExpensesList expenses={expenses} accounts={accounts} />
    </div>
  );
}
