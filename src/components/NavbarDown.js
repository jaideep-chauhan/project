import React from 'react';
import './Style.css';
import image1 from '../imgs/img-1.jpg'
import image2 from '../imgs/img-2.jpg'
import image3 from '../imgs/img-3.jpg'
import image4 from '../imgs/img-4.jpg'
import image5 from '../imgs/img-5.jpg'



export default function NavbarDown() {
  return (
    <>
    <div className="down-navbar">
    <div id="demo" className="carousel slide" data-ride="carousel">
  {/* Indicators */}
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to={0} className="active" />
    <li data-target="#demo" data-slide-to={1} />
    <li data-target="#demo" data-slide-to={2} />
    <li data-target="#demo" data-slide-to={3} />
    <li data-target="#demo" data-slide-to={4} />
  </ul>
  {/* The slideshow */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} />
    </div>
    <div className="carousel-item">
      <img src={image2} />
    </div>
    <div className="carousel-item">
      <img src={image3} />
    </div>
    <div className="carousel-item">
      <img src={image4} />
    </div>
    <div className="carousel-item">
      <img src={image5} />
    </div>
  </div>
  {/* Left and right controls */}
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon" />
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon" />
  </a>
</div>

    </div>
    </>
  )
}
