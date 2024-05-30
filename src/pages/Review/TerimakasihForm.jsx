// src/TerimakasihForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './TerimakasihForm.css';

const TerimakasihForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, comment, rating });
  };
  
  return (
    <form className="terimakasih-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nama:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
  );
};

export default TerimakasihForm;
