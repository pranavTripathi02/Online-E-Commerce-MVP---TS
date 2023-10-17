// import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Products from './pages/Products';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
// import { ProductType } from './types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './reducer/features/products/productSlice';
import axios from './api/axios';

function App() {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        try {
            const { data } = await axios('/products');
            return data.productList;

        } catch (err) {
            console.error('Error fetching products\n', err);
        }
        return [];
    };

    useEffect(() => {
        // const productList = 
        fetchProducts().then(productList => dispatch(setProducts({ productList })));
    }, [])


    return (
        <>
            <main className='relative z-0 '>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
