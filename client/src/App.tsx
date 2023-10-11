import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Products from './pages/Products';
import './App.css';

function App() {
    return (
        <>
            <main className='relative z-0 '>
                <Navbar />
                <Sidebar />
                <Products />
            </main>
        </>
    );
}

export default App;
