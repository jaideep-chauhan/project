import React from 'react';
import logo from "../imgs/Transparent Logo.png";


export default function OrderPage() {
  return (
<>
<div className='main-order container-sec'>
    <h1>Order Details</h1>
    <div className='order-on'>
        <span>order on August 2022</span>
        <div className='order-hash'>
            <span>Order# 402-4092-2976</span>
        </div>
        <button>Printable Order Summary</button>
    </div>
    <div className='total-payment'>
        <div className='pay-method'>
            <h4>Payment Mrthod</h4>
            <span>BHIM UPI</span>
        </div>
        <div className='order-summary'>
            <h4>Order Summary</h4>
            <span>Item{`(s)`} Subtotal :</span>
            <h6>Total :</h6>
            <h4>Grand Total :</h4>
        </div>
        <div className='pay-value'>
            <span>{`$`}99</span>
            <span>{`$`}99</span>
            <span>{`$`}99</span>
        </div>
    </div>
    <div className='pay-successful'>
        <h4>Successful</h4>
        <span>Paid on : 18 August 2022</span>
        <div className='success-history'>
            <div className='order-img'>
            <img src={logo} />
             </div>
             <div className='pay-details'>
                <h4>Mobile Prepaid Recharge</h4><br/>
                <span>Mobile number</span><br/>
                <span>8253975268 BSNL (Haryana)</span><br/>
                <br/>
                <span>Operator Referance Number</span><br/>
                <span>5864856957</span><br/>
                <br/>

                <button>Order Again</button>
             </div>
             <div className='order-plan'>
                <span>Plan</span><br/>
                <span>Plan Unlimited Plans</span><br/>
                <span>Validity : 18 Days</span><br/>
             </div>
        </div>
    </div>
</div>
</>
    )
}
