import { getFromStorage, saveToStorage } from "./storage";

const EXPENSES_KEY = "expenses";

export const getExpenses = () => {
  return getFromStorage(EXPENSES_KEY, []);
};

export const addExpense = (expense) => {
  const expenses = getExpenses();
  expenses.push({ ...expense, id: Date.now() });
  saveToStorage(EXPENSES_KEY, expenses);
  return expenses;
};
