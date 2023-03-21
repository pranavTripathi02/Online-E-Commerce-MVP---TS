import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Products from './pages/Products';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='flex flex-col px-2'>
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
