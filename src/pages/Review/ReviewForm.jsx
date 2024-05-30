import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ReviewForm.css';

const ReviewForm = () => {
  const [nama, setNama] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false); // State untuk menandai apakah formulir sudah dikirim
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { nama, comment, rating };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
  
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      {submitted ? ( // Menampilkan formulir terima kasih jika submitted true
        <div className="thank-you">
          <h2>Terima kasih atas ulasannya, {nama}!</h2>
          <button onClick={() => setSubmitted(false)}>Kirim ulasan lainnya</button>
        </div>
      ) : ( // Menampilkan formulir ulasan jika submitted false
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nama">Nama:</label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Rating:
              <FontAwesomeIcon icon={faStar} className="label-star" />
            </label>
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
