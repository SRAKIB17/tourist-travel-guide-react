import React from 'react';
import city1 from '../../images/city/city-1.jpg'
import city2 from '../../images/city/city-2.jpg'
import city3 from '../../images/city/city-3.jpg'
import city4 from '../../images/city/city-4.jpg'
import city5 from '../../images/city/city-5.jpg'
import city6 from '../../images/city/city-6.jpg'
const CityTour = () => {
    return (
        <div className='cityTour'>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center', margin:'10px 0 0 0'}}>
                <div style={{border: '1px solid #C9E1F9',width:'100px'}}>

                </div>
                <p style={{margin:'2px'}}>Rent Things The Easier Way</p>
                <div  style={{border: '1px solid #C9E1F9',width:'100px'}}>

                </div>
            </div>

            <h2 className='text-center'>Popular Cities Travel - 2022</h2>
            <div className='row'>
                <div className='col-md-12 col-lg-6 col-sm-12'>
                    <img src={city1} alt="" />
                    <h3>New Yourk</h3>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <img src={city2} alt="" />
                    <h3>Paris</h3>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <img src={city3} alt="" />
                    <h3>London</h3>
                </div>
            </div>
            <div className='row '>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <img src={city4} alt="" />
                    <h3>Bangkok</h3>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <img src={city5} alt="" />
                    <h3>Dubai</h3>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img src={city6} alt="" />
                    <h3>Singapur</h3>
                </div>
            </div>
        </div>

    );
};

export default CityTour;