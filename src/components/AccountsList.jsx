export default function AccountsList({ accounts, onUpdate }) {
  const handleChange = (id, newBalance) => {
    onUpdate(id, Number(newBalance));
  };

  return (
    <div>
      {accounts.map((acc) => (
        <div key={acc.id} style={styles.card}>
          <strong>{acc.name}</strong>
          <input
            type="number"
            defaultValue={acc.balance}
            onBlur={(e) => handleChange(acc.id, e.target.value)}
            style={styles.input}
          />
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  input: { width: "120px", padding: "5px" },
};
