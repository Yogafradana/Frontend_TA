import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './AppDownload.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AppDownload = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/reviews')
      .then(response => {
        setTestimonials(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the testimonials!', error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="testimonial-container">
      <h2>Dari Pelanggan Kami</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <h3>{testimonial.nama}</h3>
              <div className="stars">{'★'.repeat(testimonial.rating)}</div>
              <p>{testimonial.comment}</p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default AppDownload;
