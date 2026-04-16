import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h1>About Cafe Bliss ☕</h1>

      <div style={styles.card}>
        <p>
          At Cafe Bliss, we believe in creating moments of joy through coffee.
          Our cafe offers a cozy and relaxing environment with premium quality
          beverages and delicious food.
        </p>

        <p>
          Whether you're here to relax, work, or spend time with friends,
          we ensure a delightful experience every time you visit 💖
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#f5f5f5",
    height: "100vh"
  },
  card: {
    maxWidth: "600px",        // 👈 controls width (important fix)
    margin: "30px auto",      // 👈 center horizontally
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    fontSize: "18px",
    lineHeight: "1.6"
  }
};

export default About;