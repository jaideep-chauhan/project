import React from 'react';
import Carousel from './Carousel';
import CoustomToy from './CoustomToy';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarDown from './NavbarDown';
import OrderPage from './OrderPage';
import Shipping from './Shipping';
import ShopByAge from './ShopByAge';

export default function Home() {
  return (
   <>
   <div className="App">
        <Navbar/>
        <NavbarDown/>
      </div>
      <ShopByAge/>
     <Carousel/>
      <Footer/>
     <CoustomToy/>
     <Shipping/>
     <OrderPage/>
   </>
  )
}
