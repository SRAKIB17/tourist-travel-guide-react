import React, { useRef, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { Github, Google } from 'react-bootstrap-icons';
import Loading from '../Loading/Loading';


const Login = () => {
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'


    const [register, setRegister] = useState(true)
    const [target, setTarget] = useState(true)
    const [resetTarget, setResetTarget] = useState(false)
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



    const [createUserWithEmailAndPassword, user1, loading1, error1] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithEmailAndPassword, user2, loading2, error2] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth)

    const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);
    console.log(error4)
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    // form handle
    const emailRef = useRef('')
    const formSubmitHandler = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        event.preventDefault()
        
        if (!register) {
            createUserWithEmailAndPassword(email, password)

        }
        else {
            signInWithEmailAndPassword(email, password)
            
        }
    }
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    let errMsg = ''
    if((error||error1)||(error2||error3)||error4){
        errMsg = error?.message || error1?.message || error2?.message ||error3?.message ||error4?.message
    }
    if (user || user1|| user2 || user3 || user4) {
        navigate(from)
    }

    // for sign in other option 
    let option
    if (register) {
        option = 'Login';
    }
    else {
        option = 'Sign up';
    }
    const resetPass = (event) => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email)
        
    }
    return (
        <div className='login'>
            {
                resetTarget ? <h1>Reset Password</h1> : <h1>Please {register ? 'Login' : 'Sign Up'}</h1>
            }
            <p>{errMsg===''|| errMsg}</p>
            <form onSubmit={formSubmitHandler}>
                {
                    register || <input type="text" name="name" id="" placeholder='Name' />
                }
                <input className='' ref={emailRef} type="email" name="email" id="" placeholder='Email' onChange={emailHandlar} />
                {
                    resetTarget ||
                        <>
                            <input type="password" name="password" id="" placeholder='Password' />
                            <input className='btn' disabled={target} type="submit" value={register ? 'Login' : 'Sign Up'} />
                        </>
                }
            </form>


            {/* reset button  */}
            {
                resetTarget&&<button disabled={target} style={{ width: '400px', fontSize: '25px' }} className='btn btn-warning m-1 text-light' onClick={resetPass}>Reset Password</button>
            }

            {/* forget password  */}
            {resetTarget || register && <p className='h5 mx-4'>Forget password <button className='btn' style={{ fontSize: '20px' }} onClick={() => {
                setResetTarget(!resetTarget)
                errMsg = ''
                }}>Reset Password</button></p>}

            {/* or  */}
            <div className='LoginOr'>
                <div></div>
                <p>Or</p>
                <div></div>
            </div>

            {/* for google /github */}
            {resetTarget || <div>
                <button style={{ width: '400px', fontSize: '25px' }} className='btn btn-info m-1 text-light' onClick={() => signInWithGoogle()}><Google /> {option} with Google</button>
                <br />
                <button style={{ width: '400px', fontSize: '25px' }} className='btn btn-warning m-1 text-light' onClick={() => signInWithGithub()}><Github />{option} with GitHub</button>
            </div>}

            {/* register  */}
            <div className='d-flex align-items-center'>
                <p className='h5'>{register ? 'New User? ' : 'Already have an account'}<button className='btn ' style={{ fontSize: '25px' }} onClick={() => {
                    setRegister(!register)
                    setResetTarget(false)
                    errMsg = ''
                    
                }}>{register ? 'Create a new account' : 'Login'}</button></p>
            </div>
        </div>
    );
};

export default Login;