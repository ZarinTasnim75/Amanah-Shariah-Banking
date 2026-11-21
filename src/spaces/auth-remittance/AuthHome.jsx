import styles from './styles/auth.module.css';

function AuthHome() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Member 1</h1>
        <h2>Authentication & Remittance</h2>
        <p>Login, Create Account, Account Opening, Remittance and Receive Money.</p>
        <button className={styles.button}>Explore Auth</button>
      </div>
    </div>
  );
}

export default AuthHome;