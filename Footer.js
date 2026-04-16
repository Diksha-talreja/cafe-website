import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Developed by Diksha Talreja 💜</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#333",
    color: "white",
    position: "fixed",
    bottom: "0",
    width: "100%"
  }
};

export default Footer;