import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className='subscribe'>
                    <input type="email" name="email" id="" placeholder='email' />
                    <input type="submit" value="SUBSCRIBE" />
                </div>
                <div>
                    <h4>Connect Socially</h4>
                    <div className='social'>
                        <ul>
                            <li><a href="#"><Twitter/></a></li>
                            <li><a href="#"><Facebook/></a></li>
                            <li><a href="#"><Instagram/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p style={{color:'gray'}}>© 2020 Ecata City Portal - All rights reserved.</p>
        </footer>
    );
};

export default Footer;