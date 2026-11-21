
import styles from './styles/banking.module.css';

function BankingHome() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Member 2</h1>
        <h2>Banking Services</h2>
        <p>Home, Banking, Savings, Financing, Cards and Transfer Money.</p>
        <button className={styles.button}>Explore Banking</button>
      </div>
    </div>
  );
}

export default BankingHome;
