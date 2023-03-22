import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Products from './pages/Products';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='px-2'>
        <Sidebar />
      </div>
      <div className='flex flex-col px-2'>
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
