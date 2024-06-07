import React, { useEffect, useState } from "react";
import "./ExploreMenu.css";
import axios from "axios";
import Slider from "react-slick";
import NominalFormat from "../NumberFormat/NumberFormat";

const ExploreMenu = ({ category }) => {
	const [bestSellerResponse, setBestSellerResponse] = useState(null);
	const [recommendationResponse, setRecommendationResponse] = useState(null);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		// appendDots: dots => (
		// 	<div className="home-slider-dot">
		// 		<ul style={{ margin: "0px" }}> {dots} </ul>
		// 	</div>
		// ),
		customPaging: i => (
			<div
				style={{
					width: "30px",
					color: "blue",
					border: "1px blue solid",
					margin: "1px"
				}}
				className={i === 0 ? `div-item-home-active-first` : 'div-item-home-active'}
			>
				{/* {i + 1} */}
				&nbsp;
			</div>
		)
	};

	useEffect(() => {
		getBestSellerMenu();
		getRecommendationMenu();
	}, []);

	const getBestSellerMenu = async () => {
		try {
			const response = await axios.get("http://127.0.0.1:8000/api/menu/best");
			setBestSellerResponse(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const getRecommendationMenu = async () => {
		try {
			const response = await axios.get("http://127.0.0.1:8000/api/menu/rekomendasi");
			setRecommendationResponse(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const renderMenuItems = (items) => {
		return
	};

	return (
		<div className=" my-5">
			<div className="section">
				<h2 className="home-title-menu-section">Rekomendasi Menu</h2>
				<div className="food-display-list2">
					<div className="slider-container menu-home-list">
						<Slider {...settings}>
							{
								recommendationResponse != null ?
									recommendationResponse.map((item, index) => {
										if (category === "All" || category === item.category) {
											// const imageUrl = `http://127.0.0.1:8081/images/${item.gambar}`;
											const imageUrl = `http://127.0.0.1:8000/assets/images/${item.gambar}`;
											return (
												<div className="menu-home-list-item" key={index}>
													<div className="card">
														<img src={imageUrl} className="card-img-top" alt={item.nama_menu} />
														<div className="card-body">
															<h5 className="card-title-home-list">{item.nama_menu}</h5>
															<p className="card-sub-title-home-list">{item.deskripsi}... <span className="card-sub-title-home-list-detail">Detail</span></p>
															<NominalFormat className={"card-sub-title-home-list-price"} value={item.harga} />
														</div>
													</div>
												</div>
											);
										}
										return '';
									}) : <div>Loading...</div>
							}
						</Slider>
					</div>
				</div>
			</div>
			<div className="section" style={{ paddingTop: 20 }}>
				<h2 className="home-title-menu-section">Best seller</h2>
				<div className="food-display-list2">
					<div className="slider-container menu-home-list">
						<Slider {...settings}>
							{
								bestSellerResponse != null ?
									bestSellerResponse.map((item, index) => {
										if (category === "All" || category === item.category) {
											// const imageUrl = `http://127.0.0.1:8081/images/${item.gambar}`;
											const imageUrl = `http://127.0.0.1:8000/assets/images/${item.gambar}`;
											return (
												<div className="menu-home-list-item" key={index}>
													<div className="card">
														<img src={imageUrl} className="card-img-top" alt={item.nama_menu} />
														<div className="card-body">
															<h5 className="card-title-home-list">{item.nama_menu}</h5>
															<p className="card-sub-title-home-list">{item.deskripsi}... <span className="card-sub-title-home-list-detail">Detail</span></p>
															<NominalFormat displayType={'text'} className={"card-sub-title-home-list-price"} value={item.harga} />
														</div>
													</div>
												</div>
											);
										}
										return '';
									}) : <div>Loading...</div>
							}
						</Slider>
					</div>
				</div>
			</div>
			{/* <div className="section mt-5">
				<h2>Best Seller</h2>
				<div className="food-display-list">
					{bestSellerResponse ? renderMenuItems(bestSellerResponse) : "Loading..."}
				</div>
			</div> */}
		</div>
	);
};

export default ExploreMenu;
