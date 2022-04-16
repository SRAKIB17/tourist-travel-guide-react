import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className='subscribe'>
                    <input type="email" name="email" id="" placeholder='email' />
                    <input type="submit" value="SUBSCRIBE" />
                </div>
                <div>
                    <h2>Connect Socially</h2>
                    <div className='social'>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>© 2020 Ecata City Portal - All rights reserved.</p>
        </footer>
    );
};

export default Footer;