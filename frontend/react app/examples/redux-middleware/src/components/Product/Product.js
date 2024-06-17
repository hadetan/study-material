import React from 'react';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/CartSlice';

function Product({ product }) {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.CartReducer.cart);
    const curItem = cart.find((item) => item.id === product.id);
    const curQuantity = curItem ? curItem.quantity : 0;

    return (
        <div className="product">
            <img
                className="productImg"
                src={product.image}
                alt={product.title}
            />

            <div className="productInfo">
                <h2 className="productTitle">{product.title}</h2>
                <p className="productPrice">{product.price}$</p>
            </div>
            <div className="cartInfo">
                <button
                    className="btn"
                    onClick={() => dispatch(addToCart(product.id))}
                >
                    +
                </button>
                <h4>{curQuantity}</h4>
                <button
                    className="btn"
                    onClick={() => dispatch(removeFromCart(product.id))}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default Product;
