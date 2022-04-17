import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useJsonData from '../../../hooks/useLoadJson';
import Loading from '../Loading/Loading';

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
    const navigate = useNavigate()
    let cart;
    let discription;
    let img;
    let lastDate;
    let loacation;
    let tour;
    let tourDate;
    if (Tour.length === 1) {
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

    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }


    return (
        <div className='cartJoin '>
            <div className='mb-3 cardBody w-100 h-100 tourJoin'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0 0 0' }}>
                    <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                    </div>
                    <h1 style={{ margin: '2px' }}>Cart View</h1>
                    <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                    </div>
                </div>
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
                <button style={{width:'400px'}} onClick={() => navigate('/join/' + id)}><FontAwesomeIcon icon={faCartShopping} /> Proccid to Pay</button>
            </div>
        </div>
    );
};

export default JoinTour;