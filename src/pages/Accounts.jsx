import { useEffect, useState } from "react";
import { getAccounts, addAccount, updateAccountBalance } from "../backend/accountsService";
import AccountForm from "../components/AccountForm";
import AccountsList from "../components/AccountsList";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setAccounts(getAccounts());
  }, []);

  const handleAdd = (acc) => {
    setAccounts(addAccount(acc));
  };

  const handleUpdate = (id, newBal) => {
    setAccounts(updateAccountBalance(id, newBal));
  };

  return (
    <div>
      <h2>Accounts</h2>
      <AccountForm onAdd={handleAdd} />
      <AccountsList accounts={accounts} onUpdate={handleUpdate} />
    </div>
  );
}
