export default function ExpensesList({ expenses, accounts }) {
  const getAccountName = (id) =>
    accounts.find((a) => a.id === id)?.name || "Unknown";

  return (
    <div>
      {expenses.map((exp) => (
        <div key={exp.id} style={styles.card}>
          <span>₹{exp.amount}</span>
          <span>{exp.category}</span>
          <span>{exp.date}</span>
          <span>{getAccountName(exp.accountId)}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
};
