import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

	const [newCartItem, setnewCartItem] = useState([]);

	useEffect(() => {
		// console.log('cartItems', cartItems)
		const groupedCart = Array.from(groupObject(cartItems, (item) => item.id))
		
		let newArray = []
		for (let i = 0; i < groupedCart.length; i++) {

			// Hitung harga
			let price = 0
			for (let k = 0; k < groupedCart[i][1].length; k++) {
				price += Number(groupedCart[i][1][k].harga)
			}
			
			newArray.push({
				nama_menu: groupedCart[i][1][0].nama_menu,
				deskripsi: groupedCart[i][1][0].deskripsi,
				harga: price,
				id: groupedCart[i][1][0].id,
				kategori: groupedCart[i][1][0].kategori,
				jumlah: groupedCart[i][1].length,
				gambar: groupedCart[i][1][0].gambar,
			})
		}
		console.log("newArray", newArray)
		setnewCartItem(newArray)

	}, [cartItems]);
	const navigate = useNavigate();

	const groupObject = (list, keyGetter) => {
		const map = new Map();
		list.forEach((item) => {
			const key = keyGetter(item);
			const collection = map.get(key);
			if (!collection) {
				map.set(key, [item]);
			} else {
				collection.push(item);
			}
		});
		return map;
	}

	function checkout() {
		// {
		// 	"nama_pengunjung": "pengunjung 1",
		// 	"meja_id": 1,
		// 	"menus": [
		// 		{
		// 			"menu_id": 3,
		// 			"jumlah": 3,
		// 			"subtotal":"15000"
		// 		},
		// 		{
		// 			"menu_id": 2,
		// 			"jumlah": 2,
		// 			"subtotal":"30000"
		// 		}
		// 	],
			
		
		// 	"keterangan": "Pesan tambahan"
		// }
		const payload = {
			nama_pengunjung: "",
			meja_id: 0,
			menus: newCartItem,
			keterangan: "",
		}

		// Panggil axios post, kirim payload diatas
	}

	return (
		<div className="cart">
			<div className="cart-items">
				<div className="cart-items-title">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{newCartItem && newCartItem.map((item, index) => {
					return (
						<div key={index}>
							<div className='cart-items-title cart-items-item'>
								<img src={"http://127.0.0.1:8000" + item.gambar} alt="" />
								<p>{item.nama_menu}</p>
								<p>${item.harga}</p>
								<p>{item.jumlah}</p>
								<p>${item.harga}</p>
								<p onClick={() => removeFromCart(item._id)} className="cross">x</p>
							</div>
							<hr />
						</div>
					)

				})}
				{/* {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index}>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
              </div>
                  <hr />
              </div>
            )
          }
          
        })} */}
			</div>
			<div className="cart-bottom">
				<div className="cart-total">
					<h2>Crat Totals</h2>
					<div>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p> Delevery fee</p>
							<p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
						</div>
					</div>
					<button onClick={() => navigate("/order")}>Checkout</button>
				</div>
				<div className="cart-promocode">
					<div>
						<p>if you have a promo code , enter it here</p>
						<div className="cart-promocode-input">
							<input type="text" placeholder="promo code" />
							<button>Apply</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Cart;
