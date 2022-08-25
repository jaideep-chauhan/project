import React from 'react';
import './Style.css';
import {useRef, useEffect,useState} from "react";
import {motion, MotionConfig} from 'framer-motion';
import image1 from "../imgs/img-1.jpg"


export default function ShopByAge() {



    const[width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);


  return (
    <>
        
    <div className='shopage container-sec'>
        <h1 className='heading Bar-bottom '>Shop By Age</h1>

    <div className='age  shopbyage'>
    <motion.div className='carousel-1' ref={carousel}>
            <motion.div drag="x" 
            dragConstraints={{ right: 0, left: -width}}
            className='inner-carousel d-flex-sb'>
                
                
                 <div className='age-items'>
            <img src={image1} ></img>
            <div className='img-age'>
                <h4>0-18 Months</h4>
            </div>
        </div>
        <div className='age-items'>
            <img src={image1} ></img>
            <div className='img-age'>
                <h4>0-18 Months</h4>
            </div>
        </div>
        <div className='age-items'>
            <img src={image1}></img>
            <div className='img-age'>
                <h4>0-18 Months</h4>
            </div>
        </div>
        <div className='age-items'>
            <img src={image1}></img>
            <div className='img-age'>
                <h4>0-18 Months</h4>
            </div>
        </div>
        <div className='age-items'>
            <img src={image1}></img>
            <div className='img-age'>
                <h4>0-18 Months</h4>
            </div>
        </div>
        <div className='age-items'>
            <img src={image1}></img>
            <div className='img-age'>
                <h4>0-18 Months</h4>
            </div>
        </div>
        </motion.div>
        </motion.div>
    </div>
     </div>
     </>
  )
}
