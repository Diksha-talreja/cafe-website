import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={styles.nav}>
      <h2>☕ Cafe Bliss</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/menu" style={styles.link}>Menu</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#333",
    color: "white"
  },
  link: {
    margin: "10px",
    color: "white",
    textDecoration: "none"
  }
};

export default Header;