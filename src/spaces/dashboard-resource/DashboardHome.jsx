
import styles from './styles/dashboard.module.css';

function DashboardHome() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Member 3</h1>
        <h2>Dashboard & Resources</h2>
        <p>Accounts, Dashboard, Resources and About Us.</p>
        <button className={styles.button}>Explore Dashboard</button>
      </div>
    </div>
  );
}

export default DashboardHome;
