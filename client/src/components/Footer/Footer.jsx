import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Facilis adipisci esse et fuga hic nobis autem expedita suscipit ullam error,
                      repellat eaque incidunt placeat eius.
               </span>
            </div>
            <div className="item">
            <h1>Contact</h1>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Facilis adipisci esse et fuga hic nobis autem expedita suscipit ullam error,
                      repellat eaque incidunt placeat eius.
               </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className='logo'>KRCSTORE</span>
                <span className='copyright'>© Copyright 2023. All Rights Reserved.</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="payment" />
            </div>
        </div>
    </div>
  )
}

export default Footer