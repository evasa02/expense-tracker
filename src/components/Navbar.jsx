import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/accounts" style={styles.link}>Accounts</Link>
      <Link to="/expenses" style={styles.link}>Expenses</Link>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#eee",
    marginBottom: "20px",
  },
  link: {
    fontSize: "18px",
    textDecoration: "none",
  }
}
