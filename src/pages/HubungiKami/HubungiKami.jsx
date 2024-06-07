import "./HubungiKami.css";
import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Banner from "../../components/Navbar/Banner";

const HubungiKami = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/send-email", formData)
      .then((response) => {
        setMessage("Email sent successfully!");
        setFormData({ nama: "", email: "", pesan: "" }); // Clear form inputs
      })
      .catch((error) => {
        setMessage("Failed to send email.");
      });
  };

  return (
    <>
    <Banner />
      <div>
        <Header />
      </div>
      <div className="contact-us">
        <h1>Hubungi Kami</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nama">Nama:</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pesan">Pesan:</label>
            <textarea
              id="pesan"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Kirim</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
};

export default HubungiKami;
