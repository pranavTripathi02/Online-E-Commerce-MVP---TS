import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Products from './pages/Products';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
    return (
        <>
            <main className='relative z-0 '>
                <Navbar />
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
