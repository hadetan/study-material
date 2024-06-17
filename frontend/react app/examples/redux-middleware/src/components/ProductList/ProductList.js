import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slices/ProductSlice';
import Product from '../Product/Product';
import './ProductList.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.ProductReducer.products);
    const status = useSelector((state) => state.ProductReducer.status);
    const error = useSelector((state) => state.ProductReducer.error);

    useEffect(() => {
        // fetchData();
        dispatch(fetchData());
    }, []);

    // const fetchData = async () => {
    //     const { data } = await axios.get('https://fakestoreapi.com/products');
    //     console.log(data);
    //     dispatch(loadProducts(data));
    // };

    if (status === 'loading') {
        return (
            <Spin
                className="spinner theme"
                indicator={<LoadingOutlined spin />}
                size="large"
            />
        );
    }
    if (status === 'failed') {
        return (
            <>
                <h3 className="spinner">
                    Uh oh :&#40; <br /> <span>Something went wrong</span>
                    <p className="red">"{error}"</p>
                </h3>
            </>
        );
    }

    return (
        <div className="productList">
            {products.map((item) => (
                <Product key={item.id} product={item} />
            ))}
        </div>
    );
}

export default ProductList;
