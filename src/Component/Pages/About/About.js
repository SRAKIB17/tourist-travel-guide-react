import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <section>
            <div className='Profile-container'>
                <div>
                    <h2>
                        MD RAKIBUL ISLAM
                    </h2>
                    <p>
                        Hi,
                        <br />
                    </p>
                    <p className='Explore'>


                        Welcome to the new "Assignment site" here at W3schools. This page will known about my dream... By the way more about me ..go 'EXPLORE ME Link'
                    </p>
                    <div>
                        <a href='http://facebook.com/rakib2017'>EXPLORE ME</a>
                        <button>HIRE ME</button>
                    </div>
                </div>
                <div className='Profile'>
                    <img src={require('../../../images/profile.jpg')} alt="" />
                    <div>

                    </div>
                </div>
            </div>
            <div className='Goals'>
                <div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0 0 0' }}>
                    <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                    </div>
                    <h2 className='text-primary text-center' style={{ margin: '2px' }}>My Goal - 2022</h2>
                    <div style={{ border: '1px solid #C9E1F9', width: '100px' }}>

                    </div>
                </div>

                </div>
                <div className='h4 '>
                    <ul>
                        <li>1. learning C, Cpp and Python(Django) [I already know Basic Fundamental and also know intermidiate some ...</li>
                        <li>2. After Ending progamming hero course and i will take a big project for practice</li>
                        <li>3. These I will complete beside my study</li>
                        <li>4. Four yearse after I will consist a my IT company (Insallah)</li>
                        <li>5. Finaly I will buy a car(Its my dream)..</li>
                    </ul>
                </div>
            </div>
        </section>)
};

export default About;