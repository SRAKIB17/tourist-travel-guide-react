import { faCartPlus, faJoint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tour = ({tour:{id,cart, discription,image,lastDate,loacation,tour,tourDate  }}) => {
    const images = require.context('../../../images/tour', true)

    const img = images(`./${image}`);
    const navigate = useNavigate()
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 cardFeature'>
            
            <div className='mb-3 cardBody w-100 h-100 tourJoin'>
                <p style={{fontSize:'25px'}}>{tour+','+loacation}</p>
                <img src={img} alt="" />
                <h4> Total Cost: <span style={{color:'orange'}}>{cart}</span></h4>
                <h5>Last Date: {lastDate}</h5>
                <h5>Tour Date: {tourDate}</h5>
                <p>
                    {
                        discription.substr(0, 150)
                    }
                </p>
                <button onClick={()=>navigate('/join/'+id)}><FontAwesomeIcon icon={faCartPlus}/> Join With Me</button>
            </div>
        </div>
    );
};

export default Tour;
