import { useState } from "react";

export default function AccountForm({ onAdd }) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !balance) return;
    onAdd({ name, balance: Number(balance) });
    setName("");
    setBalance("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Account Name"
        style={styles.input}
      />

      <input
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        placeholder="Initial Balance"
        type="number"
        style={styles.input}
      />

      <button style={styles.btn}>Add Account</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: { padding: "10px", flex: 1 },
  btn: { padding: "10px 20px" },
};
