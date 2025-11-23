import { getFromStorage, saveToStorage } from "./storage";

const ACCOUNTS_KEY = "accounts";

export const getAccounts = () => {
  return getFromStorage(ACCOUNTS_KEY, []);
};

export const addAccount = (account) => {
  const accounts = getAccounts();
  accounts.push({ ...account, id: Date.now() }); // unique ID
  saveToStorage(ACCOUNTS_KEY, accounts);
  return accounts;
};

export const updateAccountBalance = (id, newBalance) => {
  const accounts = getAccounts();
  const updated = accounts.map((acc) =>
    acc.id === id ? { ...acc, balance: newBalance } : acc
  );
  saveToStorage(ACCOUNTS_KEY, updated);
  return updated;
};
