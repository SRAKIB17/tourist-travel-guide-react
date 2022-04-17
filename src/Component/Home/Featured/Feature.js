import { faAddressCard, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Feature = ({ feature: { image, name, number, address, rating } }) => {
    const images = require.context('../../../images/Featured Listings', true)

    const img = images(`./${image}`);

    return (
        <div className='col-lg-4 col-md-4 col-sm-6 cardFeature'>
            <img src={img} alt="" className='mt-3' />
            <div className='mb-3 cardBody w-100 '>
                <h2>{name}</h2>
                <address><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> {address}</address>
                <p><FontAwesomeIcon icon={faPhone} /> {number}</p>
                <small>Rating: {rating}</small>
            </div>
        </div>
    );
};

export default Feature; 