import "./HubungiKami.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Navbar/Banner";
import { Toaster, toast } from 'react-hot-toast';

const HubungiKami = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

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
        toast.success('Email sent successfully!');
        setFormData({ nama: "", email: "", pesan: "" });
        setSubmitted(true);
      })
      .catch((error) => {
        toast.error('Failed to send email.');
      });
  };

  return (
    <>
      <Banner />
      <div className="contact-us">
        {submitted ? (
          <div className="thank-you">
            <h2>Terima Kasih!</h2>
            <p>Sudah Mengisi Ulasan Kami.</p>
            <div>
              <button onClick={() => navigate('/')}>Kembali ke halaman utama</button>
            </div>
          </div>
        ) : (
          <>
            <div className="left-section">
              <h1>Hubungi Kami</h1>
              <p>Silahkan tinggalkan pesan anda pada kolom yang tersedia.</p>
            </div>
            <div className="right-section">
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
        )}
      </div>
      <Toaster />
    </>
  );
};

export default HubungiKami;
