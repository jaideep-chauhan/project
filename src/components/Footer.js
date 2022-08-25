import React from 'react';
import './Style.css';
import logo from "../imgs/Transparent Logo.png"



export default function Footer() {
  return (
    <>
     
    <div className='footer Bar-top'>
        <div className='s-footer s-footer-1 d-flex'>
        <img src={logo} ></img>
        </div>
        <div className='s-footer s-footer-2'>
            <h4>About Us</h4>
            <span>About the Uvaay Group </span>
            <span>Uvaay News</span>
            <span>Sustainability</span>
            <span>Supply chain transparency statement</span>
            <span>Uvaay product certification</span>
            <span>Uvaay jobs</span>
            <span>Uvaay Compliance Line</span>
        </div>
        <div className='s-footer s-footer-3'>
            <h4>Support</h4>
            <span>Contact Us</span>
            <span>Find Building instruction</span>
            <span>Replacement parts</span>
            <span>Product recalls</span>
        </div>
        <div className='s-footer s-footer-4'>
            <h4>Attractions</h4>
            <span>Uvaay House</span>
            <span>Uvaay Parks</span>
            <span>Uvaay Discovery</span>
            <span>Centers</span>
        </div>
        <div className='s-footer s-footer-5'>
            <h4>More Form Us</h4>
            <span>Uvaay Life</span>
            <span>Uvaay Education</span>
            <span>Uvaay ideas</span>
            <span>Uvaay Foundation</span>
            <span>Uvaay Braille Bricks</span>
        </div>
    </div>
    </>
  )
}
