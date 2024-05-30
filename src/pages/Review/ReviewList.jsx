// src/ReviewList.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ReviewList.css';

const Review = ({ name, rating, comment }) => {
  const stars = Array(rating).fill(<FontAwesomeIcon icon={faStar} className="star" />);

  return (
    <div className="review">
      <h3>{name}</h3>
      <div className="stars">{stars}</div>
      <p>{comment}</p>
    </div>
  );
};

const ReviewList = ({ reviews = [] }) => { // Tambahkan default value []
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
