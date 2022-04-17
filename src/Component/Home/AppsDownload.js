import React from 'react';
import bg from '../../images/bg-download.jpg'
import play from '../../images/play store.svg'
import apps from '../../images/app store.svg'
const AppsDownload = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '350px', position: 'relative' }} >
            <div className='appsDownload'>
                <h2>Download The App</h2>
                <p>
                    By using our app it’s all fun to discover some great stuff
                    & places for entertainment, eat, shop & Travel.
                </p>
            </div>
            <div className='appLogo' >
                <a href=""><img src={play} alt="" /></a>
                <a href=""><img src={apps} alt="" /></a>
            </div>
        </div>
    );
};

export default AppsDownload;