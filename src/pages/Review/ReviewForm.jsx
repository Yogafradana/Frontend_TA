import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios untuk melakukan HTTP request
import './ReviewForm.css';
import Banner from '../../components/Navbar/Banner';

const ReviewForm = () => {
  const [nama, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Kirim data ke API
      const response = await axios.post('http://127.0.0.1:8000/api/reviews', {
        nama,
        comment,
        rating,
      });
      console.log('Response:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting review:', error);
      // Tampilkan pesan error kepada pengguna jika diperlukan
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="thank-you">
          <h2>Terima kasih !!!</h2>
          <p>Sudah Mengisi Ulasan Kami </p>
          <div>
            <button onClick={() => navigate('/')}>Kembali ke halaman utama</button>
          </div>
        </div>
      ) : ( 
        
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              value={nama}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={index < rating ? 'star filled' : 'star'}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Isi ulasan"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <button type="submit">Kirim</button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
