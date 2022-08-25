import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarDown from './components/NavbarDown';
import ShopByAge from './components/ShopByAge';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <NavbarDown/>
    </div>
    <ShopByAge/>
    <Carousel/>
      <Footer/>
      </>
  );
}

export default App;
