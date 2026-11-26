
import React from "react";
import "../styles/Account.css";

import {
  Wallet,
  PiggyBank,
  BriefcaseBusiness,
  CreditCard,
  Percent,
  IdCard,
  ArrowRight
} from "lucide-react";

function Accounts() {
  const accountData = [
    {
      title: "Checking Account",
      count: 1250,
      description:
        "Manage your everyday transactions with flexible and convenient banking facilities.",
      icon: <CreditCard size={32} />
    },
    {
      title: "Savings Account",
      count: 850,
      description:
        "Save for your future goals and grow your money with secure savings solutions.",
      icon: <PiggyBank size={32} />
    },
    {
      title: "Business Account",
      count: 450,
      description:
        "Manage your business finances with reliable and efficient banking services.",
      icon: <BriefcaseBusiness size={32} />
    }
  ];

  return (
    <div className="accounts-page">

      <div className="accounts-layout">

        {/* Sidebar */}
        <aside className="accounts-sidebar">

          <div className="sidebar-heading">
            Overview
          </div>

          <div className="sidebar-service">

            <div className="sidebar-heading">
              Services
            </div>

            <a href="#">Savings and Deposits</a>
            <a href="#">Financing (Loan)</a>
            <a href="#">Cards</a>
            <a href="#" className="active-sidebar">Account</a>

          </div>

          <a href="#" className="sidebar-heading">
            Transfer Money
          </a>

          <a href="#" className="sidebar-heading">
            Overseas Banking
          </a>

        </aside>


        {/* Main Content */}
        <main className="accounts-main">

          {/* Hero Section */}
          <section className="accounts-hero">

            <div className="hero-circle"></div>

            <div className="accounts-hero-content">

              <span className="section-label">
                The right financial help
              </span>

              <h1>
                An Account You Can Truly Bank Upon
              </h1>

              <p>
                Change the way you manage your money.
                We have a fine range of accounts to help
                you manage your finances seamlessly.
              </p>

              <button className="primary-btn">
                Get Started <ArrowRight size={17} />
              </button>

            </div>

            {/* Hero MP4 Illustration */}
            <div className="accounts-hero-image">

              <video
                className="accounts-hero-animation"
                src="/images/Account-Illustration1.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

            </div>

          </section>


          {/* Benefits Section */}
          <section className="account-benefits">

            <div className="section-intro">

              <span className="section-label">
                Open your account from anywhere in the world
              </span>

              <h2>An account, designed for you</h2>

              <p>
                Power up your business and personal life with
                a full-stack online bank account that fits your needs.
              </p>

            </div>


            <div className="benefits-grid">

              <div className="benefit-item">

                <div className="benefit-icon">
                  <Wallet />
                </div>

                <h4>No Minimum Balance Required</h4>

                <p>
                  Taking the first step towards your dreams
                  should be a breeze, not a burden.
                </p>

              </div>


              <div className="benefit-item">

                <div className="benefit-icon">
                  <Percent />
                </div>

                <h4>No Monthly Account Fees</h4>

                <p>
                  So that every month, you can focus on
                  investing in your ambitions.
                </p>

              </div>


              <div className="benefit-item">

                <div className="benefit-icon">
                  <IdCard />
                </div>

                <h4>No SSN Needed</h4>

                <p>
                  All we need is basic information about you,
                  your visa and passport.
                </p>

              </div>

            </div>

          </section>


          {/* Security Section */}
          <section className="account-security">

            <div className="security-content">

              <h2>
                Our trust is built on your security
              </h2>

              <p>
                We keep your money safe with advanced
                security technology and reliable banking protection.
              </p>

            </div>

            <div className="security-image">

              <img
                src="/images/account-security.png"
                alt="Secure online banking"
              />

            </div>

          </section>


          {/* Account Overview Section */}
          <section className="account-overview">

            <div className="section-intro">

              <span className="section-label">
                Open your account from anywhere in the world
              </span>

              <h2>Solutions for Every Business Need.</h2>

              <p>
                Explore our account services and discover
                the right banking solution for your needs.
              </p>

            </div>


            {/* Dynamic Account Cards */}
            <div className="account-cards">

              {accountData.map((account, index) => (

                <div className="account-card" key={index}>

                  <div className="account-card-icon">
                    {account.icon}
                  </div>

                  <h3>{account.title}</h3>

                  <div className="account-count">
                    {account.count.toLocaleString("en-US")}
                  </div>

                  <span className="account-count-label">
                    Accounts Opened
                  </span>

                  <p>{account.description}</p>

                  <a href="#" className="open-account-link">
                    Open Account <ArrowRight size={15} />
                  </a>

                </div>

              ))}

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Accounts;
