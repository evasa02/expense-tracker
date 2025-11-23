import { useState } from "react";

export default function ExpenseForm({ accounts, onAdd }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [accountId, setAccountId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !accountId) return;

    onAdd({
      amount: Number(amount),
      category,
      date,
      accountId: Number(accountId),
    });

    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.input}>
        <option>Food</option>
        <option>Skincare</option>
        <option>Need</option>
        <option>Want</option>
        <option>Activity</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={styles.input}
      />

      <select value={accountId} onChange={(e) => setAccountId(e.target.value)} style={styles.input}>
        <option value="">Select Account</option>
        {accounts.map((acc) => (
          <option key={acc.id} value={acc.id}>{acc.name}</option>
        ))}
      </select>

      <button style={styles.btn}>Add Expense</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: { padding: "8px" },
  btn: { padding: "10px 20px" },
};
