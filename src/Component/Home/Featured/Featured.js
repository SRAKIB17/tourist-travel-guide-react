import React, { useEffect, useState } from 'react';
import useJsonData from '../../../hooks/useLoadJson';
import Feature from './Feature';

const Featured = () => {
    const features = useJsonData('/feature.json')
    
    return (
        <div style={{textAlign:'center'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0 0 0' }}>
                <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                </div>
                <p style={{ margin: '2px' }}>Explore The Best & Famous Things</p>
                <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                </div>
            </div>
            <h2>Featured Listings</h2>
            <div className='row m-4 p-4'> 
                {features.map(feature=><Feature feature={feature}/>)}
            </div>
        </div>
    );
};

export default Featured; 