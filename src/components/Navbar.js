import React from "react";
import "./Style.css";
// import logo from "../imgs/Logo.svg"
import logo from "../imgs/Transparent Logo.png";
import image1 from "../imgs/img-1.jpg";
import { Link } from "react-router-dom";
// import image2 from '../imgs/img-2.jpg'


export default function Navbar() {
  return (
    <>
      <div className="header d-flex-sb Bar-top">
        <div className="l-header">
          <img src={logo} />
        </div>
        <div className="c-header">
          <ul className="mega_menu">
            <div className="dropdownn">
              <li>
                <span>Deals {"&"} Promotions</span>
                <span
                  className="iconify"
                  data-icon="dashicons:arrow-down"
                ></span>
              </li>
              <div className="dropdownn-content-wrapper">
                <div className="dropdownn-content dr-co">
                  <h4>Item 1</h4>
                  <h4>Item 2</h4>
                  <h4>Item 3</h4>
                  <h4>Item 4</h4>
                  <h4>Item 5</h4>
                </div>
              </div>
            </div>
            <div className="dropdownn">
              <li>
                <span>Category</span>
                <span
                  className="iconify"
                  data-icon="dashicons:arrow-down"
                ></span>
              </li>
              <div className="dropdownn-content-wrapper">
                <div className="dropdownn-content">
                  <div className="d-c-1 ">
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-c-1 d-c-2">
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                    <div className="s-d-c-1">
                      <h5>Heading</h5>
                      <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdownn">
              <li>
                <span>Age</span>
                <span
                  className="iconify"
                  data-icon="dashicons:arrow-down"
                ></span>
              </li>
              <div className="dropdownn-content-wrapper">
                <div className="dropdownn-content">
                  <div className="age d-flex-sb">
                    <div className="age-items">
                      <img src={image1} />
                      <div className="img-age">
                        <h4>0-18 Months</h4>
                      </div>
                    </div>
                    <div className="age-items">
                      <img src={image1} />
                      <div className="img-age">
                        <h4>18 Months-3 Year</h4>
                      </div>
                    </div>
                    <div className="age-items">
                      <img src={image1} />
                      <div className="img-age">
                        <h4>3 Year - 6 Year</h4>
                      </div>
                    </div>
                    <div className="age-items">
                      <img src={image1} />
                      <div className="img-age">
                        <h4>6 Year - 9 Year</h4>
                      </div>
                    </div>
                    <div className="age-items">
                      <img src={image1} />

                      <div className="img-age">
                        <h4>9 Year - 12 Year</h4>
                      </div>
                    </div>
                    <div className="age-items">
                      <div className="img-age">
                        <h4>12 Year +</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='dropdownn'>
                            <li><span>Brand</span><span className="iconify" data-icon="dashicons:arrow-down"></span></li>

                            <div className='dropdownn-content-wrapper'>
                            <div className='dropdownn-content'>
                            <div className='age d-flex-sb'>
                                    <div className='age-items'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        </div> */}
            {/* <div className='dropdownn'>
                            <li><span>Characters</span><span className="iconify" data-icon="dashicons:arrow-down"></span></li>

                            <div className='dropdownn-content-wrapper'>
                            <div className='dropdownn-content'>
                            <div className='age d-flex-sb'>
                                    <div className='age-items character'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items character'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items character'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items character'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items character'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                    <div className='age-items character'>
                                        <img src={image1} />
                                        <div className='img-age'>
                                            <h4>0-18 Months</h4>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        </div> */}
          </ul>
          {/* <div className='input d-flex'>
                        <iconify-icon icon="bx:search"></iconify-icon>
                        <input type='search' placeholder='Search'></input>
                    </div> */}
        </div>
        <div className="r-header">
          <ul>
            <li>
              <span
                className="iconify"
                data-icon="dashicons:facebook-alt"
                style={{ color: "var(--color-pink)" }}
              ></span>
              <span>Facebook</span>
            </li>
            <li>
              <span
                className="iconify"
                data-icon="akar-icons:instagram-fill"
                style={{ color: "var(--color-red)" }}
              ></span>
              <span>Instagram</span>
            </li>
            <li>
            <Link to="/login">
              <span className="iconify" data-icon="bx:user" style={{ color: "var(--color-blue)" }}></span>
              <span>Login</span>
            </Link>
            </li>
            {/* <li><span className="iconify" data-icon="bx:shopping-bag" style={{color:"var(--color-yellow)"}}></span><span>My Bag</span></li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
