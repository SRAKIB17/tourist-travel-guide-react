import React from 'react';
import useJsonData from '../../../hooks/useLoadJson';
import Tour from './Tour';
const Tours = () => {
    const tours = useJsonData("/tour.json")

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0 0 0' }}>
                <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                </div>
                <p style={{ margin: '2px' }}>Places & Cities Must Visit This Summer</p>
                <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                </div>
            </div>
            <h2>Travel Guides</h2>
            <div className='row m-4 p-4'>
                {tours.map(tour => <Tour tour={tour}/>)}
            </div>
        </div>
    );
};

export default Tours;