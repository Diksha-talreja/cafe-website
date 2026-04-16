import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>

      {/* MAIN CONTENT */}
      <div style={styles.centerBox}>

        <h1 style={styles.title}>Cafe Bliss ☕</h1>
        <p style={styles.subtitle}>
          Fresh Coffee • Cozy Vibes • Happy Moments
        </p>

        {/* BUTTONS */}
        <div style={styles.buttonGroup}>
          <Link to="/menu"><button style={styles.btn}>Menu</button></Link>
          <Link to="/about"><button style={styles.btn}>About</button></Link>
          <Link to="/contact"><button style={styles.btn}>Contact</button></Link>
        </div>

        {/* ORDER BUTTON */}
        <Link to="/menu">
          <button style={styles.orderBtn}>Order Now</button>
        </Link>

      </div>

      {/* FOOTER */}
      <p style={styles.footer}>Developed by Diksha Talreja 💜</p>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Arial",
    overflow: "hidden"
  },

  centerBox: {
    textAlign: "center",
    marginTop: "12vh"
  },

  title: {
    fontSize: "70px",       // 🔥 BIG heading FIXED
    fontWeight: "bold",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "20px",
    color: "gray",
    marginBottom: "40px"
  },

  buttonGroup: {
    marginBottom: "30px"
  },

  btn: {
    margin: "8px",
    padding: "12px 25px",
    borderRadius: "25px",
    border: "none",
    background: "#333",
    color: "white",
    cursor: "pointer",
    fontSize: "15px"
  },

  orderBtn: {
    padding: "14px 35px",
    borderRadius: "30px",
    border: "none",
    background: "#ff4e50",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },

  footer: {
    marginBottom: "10px",
    fontSize: "13px",
    color: "gray"
  }
};

export default Home;