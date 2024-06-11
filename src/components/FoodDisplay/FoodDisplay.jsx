import React from 'react';
import { Link } from 'react-router-dom';
import './FoodDisplay.css';

const FoodDisplay = () => {
	return (
		<div className="food-display-container">
			{/* <h2 className="section-title">Tentang Kami</h2> */}
			<h2 className="home-title-menu-section">Tentang Kami</h2>
			<div className="food-display">
				<div className="content2">
					<div className="description ">
						<div className="text-content">
							<div className='food-display-transparant'>
								<div className="food-display-content-text">
								<h3>Cafe Microdata</h3>
								<p>
									Butuh tempat ngoding yang asyik dan nyaman? Cafe Microdata bukan
									sekedar tempat nongkrong biasa. Disini, kamu bisa menikmati
									suasana yang tenang dan santai, cocok untuk fokus menyelesaikan
									codingmu.
								</p>
								<Link to="/tentang-kami" className="btn btn-primary">
									Selengkapnya
								</Link>
								</div>
							</div>

						</div>
						<div className="food-display-parent-banner">
						<div className="image-content">
							<img src="/coffee-cup-image.png" alt="Coffee Cup" />
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodDisplay;
