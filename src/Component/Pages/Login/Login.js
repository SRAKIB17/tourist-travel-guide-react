import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';
import Loading from '../Loading/Loading';


const Login = () => {
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'
    console.log(from)
    const [register, setRegister] = useState(true)
    const [target, setTarget] = useState(true)
    const navigate = useNavigate()
    const emailHandlar = (event) => {
        const check = /\S+@\S+\.\S+/.test(event.target.value)

        if (check) {
            event.target.className = 'success'
            setTarget(false)
        }
        else {
            setTarget(true)
            event.target.className = 'err'
        }
    }

    let createUserWithEmailAndPassword;
    let user;
    let loading;
    let error;
    let signInWithEmailAndPassword;
    let signInWithGoogle;

    [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    // form handle 
    const formSubmitHandler = event => {
        const email = event.target.email.value;  
        const password = event.target.password.value;
        event.preventDefault()
        console.log(register)
        if (!register) {
            createUserWithEmailAndPassword(email, password)

        }
        else {
            signInWithEmailAndPassword(email, password)
        }
    }
    [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from)
    }

    // for sign in other option 
    let option
    if(register){
        option = 'Login';
    }
    else{
        option = 'Sign up';
    }
    return (
        <div className='login'>
            <h1>Please {register ? 'Login' : 'Sign Up'}</h1>
            <p>{error && error.message}</p>
            <form onSubmit={formSubmitHandler}>
                {
                    register || <input type="text" name="name" id="" placeholder='Name' />
                }
                <input className='' type="email" name="email" id="" placeholder='Email' onChange={emailHandlar} />
                <input type="password" name="password" id="" placeholder='Password' />

                <input disabled={target} type="submit" value={register ? 'Login' : 'Sign Up'} />
                <p className='h5 mx-4'>
                    Forget password {register&& <button className='btn' style={{fontSize:'20px'}}>Reset Password</button>}
                </p>
            </form>
            
            <div className='LoginOr'>
                <div></div>
                <p>Or</p>
                <div></div>
            </div>
            {/* for google /github */}
            <div>
                <button style={{width:'400px',fontSize:'25px'}} className='btn btn-info' onClick={()=>signInWithGoogle()}><Google/> {option} with Google</button>
            </div>
            
            <div className='d-flex align-items-center'>
                <p className='h5'>{register ? 'New User? ' : 'Already have an account'}<button className='btn' style={{ fontSize: '25px' }} onClick={() => setRegister(!register)}>{register ? 'Create a new account' : 'Login'}</button></p>
            </div>
        </div>
    );
};

export default Login;