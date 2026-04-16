import React from "react";

function Menu() {
  const items = [
    { name: "Coffee ☕", price: "₹100", img: "https://source.unsplash.com/200x200/?coffee" },
    { name: "Cappuccino ☕", price: "₹150", img: "https://source.unsplash.com/200x200/?cappuccino" },
    { name: "Pizza 🍕", price: "₹250", img: "https://source.unsplash.com/200x200/?pizza" },
    { name: "Sandwich 🥪", price: "₹120", img: "https://source.unsplash.com/200x200/?sandwich" }
  ];

  return (
    <div style={styles.container}>
      <h1>Our Menu 🍽</h1>

      <div style={styles.grid}>
        {items.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.img} alt="" style={styles.img} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button style={styles.btn}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  card: {
    width: "200px",
    padding: "15px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  },
  img: {
    width: "100%",
    borderRadius: "10px"
  },
  btn: {
    padding: "8px 15px",
    border: "none",
    background: "#ff4e50",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer"
  }
};

export default Menu;