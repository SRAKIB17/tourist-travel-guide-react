import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useJsonData from '../../../hooks/useLoadJson';

const JoinTour = () => {
    const { id } = useParams()
    const tours = useJsonData('/tour.json')
    const [Tour, setTour] = useState({})
    useEffect(() => {
        const getTour = tours.filter(tour => tour.id === id)
        setTour(getTour)
    }, [tours])
    console.log(Tour)
    const specifyTour = Tour[0]

    let cart;
    let discription;
    let img;
    let lastDate;
    let loacation;
    let tour;
    let tourDate;
    if(Tour.length === 1){
        cart = specifyTour.cart;
        discription = specifyTour.discription;
        const image = specifyTour.image;
        tour = specifyTour.tour
        lastDate = specifyTour.lastDate;
        loacation = specifyTour.loacation;
        tourDate = specifyTour.tourDate;
        const images = require.context('../../../images/tour', true)
        img = images(`./${image}`);
 
    }


    
 
    return (
        <div className='cartJoin'>
            <div className='mb-3 cardBody w-100 h-100 tourJoin'>
                <p style={{ fontSize: '25px' }}>{tour + ',' + loacation}</p>
                <img src={img} alt="" />
                <h4> Total Cost: <span style={{ color: 'orange' }}>{cart}</span></h4>
                <h5>Last Date: {lastDate}</h5>
                <h5>Tour Date: {tourDate}</h5>
                <p>
                    {
                        discription
                    }
                </p>
                {/* <button onClick={() => navigate('/join/' + id)}><FontAwesomeIcon icon={faCartPlus} /> Join With Me</button> */}
            </div>
        </div>
    );
};

export default JoinTour;