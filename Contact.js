import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert(`Thank you ${formData.name}! We will contact you soon.`);
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us 📞</h1>

      <div style={styles.card}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Your message..."
          onChange={handleChange}
          style={styles.textarea}
        />

        <button onClick={handleSubmit} style={styles.btn}>
          Submit
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
    height: "100vh"
  },
  card: {
    maxWidth: "400px",
    margin: "30px auto",
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ccc",
    height: "100px"
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    background: "#ff4e50",
    color: "white",
    borderRadius: "20px",
    cursor: "pointer"
  }
};

export default Contact;