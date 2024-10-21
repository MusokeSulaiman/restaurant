import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>

                <p>
                    The concept of food delivery is not new;
                    it has been around for decades. However, 
                    the advent of smartphones and the internet
                    has significantly transformed this service.
                    Early iterations involved phone orders and
                    limited delivery options, often restricted
                    to pizza and Chinese food. The launch of 
                    platforms like Grubhub in 2004 marked the 
                    beginning of a new era, providing a centralized
                    hub where consumers could browse menus and order
                    from various restaurants.
                </p>

                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>

            
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+256 76099877</li>
                    <li>contact@tomato.net</li>
                </ul>
            </div>
        </div>

        <hr/>

        <p className='footer-copyright'>
            Copyright 2024 @ Tomato.net - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer;