
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

function HomePage() {
  const features = [
    { title: 'Shariah-Assured Account', icon: '⚖️' },
    { title: 'Zakat Calculator', icon: '🧮' },
    { title: 'Remittance', icon: '🌐' },
  ];

  const steps = [
    'Choose Your Service',
    'Register Online',
    'Verify Your Identity',
    'Get Your Service',
  ];

  return (
    <div className={styles.page}>
      {/* Navigation */}
<nav className={styles.navbar}>
  <Link to="/" className={styles.logo}>Amanah</Link>

  <div className={styles.navLinks}>
    <Link to="/">Home</Link>
    <Link to="/banking">Banking</Link>
    <Link to="/resources">Resources</Link>
    <Link to="/about">About</Link>
  </div>

  <div className={styles.navActions}>
    <Link to="/dashboard" className={styles.dashboardIcon}>
      <span className={styles.avatarHead}></span>
      <span className={styles.avatarBody}></span>
    </Link>

    <Link to="/auth">LOGIN</Link>
    <Link to="/auth" className={styles.signup}>SignUp</Link>
  </div>
</nav>

      {/* Hero section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <span>Islamic Architecture</span>
        </div>

        <div className={styles.heroContent}>
          <h1>
            Banking Guided<br />
            by Faith.<br />
            Built for Your<br />
            Future.
          </h1>
          <a href="#features" className={styles.exploreButton}>
            Explore Now!
          </a>
        </div>
      </section>

      {/* Special features */}
      <section id="features" className={styles.features}>
        <h2>Special Features</h2>

        <div className={styles.featureList}>
          {features.map((feature) => (
            <div className={styles.featureCard} key={feature.title}>
              <h3>{feature.title}</h3>
              <span>{feature.icon}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Service process */}
      <section className={styles.process}>
        <h2>From sign-up to service in minutes</h2>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div className={styles.stepWrapper} key={step}>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <p>{step}</p>
                <Link to="/auth" className={styles.startButton}>
                  Start
                </Link>
              </div>

              {index !== steps.length - 1 && (
                <span className={styles.arrow}>→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer id="about" className={styles.footer}>
        © 2026 AMANAH. Banking Guided by Faith.
      </footer>
    </div>
  );
}

export default HomePage;