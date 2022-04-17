import React from 'react';
import { Github, Google } from 'react-bootstrap-icons';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = ({option}) => {
  
    const [signInWithGoogle, loading1, error1 ] = useSignInWithGoogle(auth)

    const [signInWithGithub, loading2, error2] = useSignInWithGithub(auth);
    console.log(error1)
    return (
        <div>
            <button style={{ width: '400px', fontSize: '25px' }} className='btn btn-info m-1 text-light' onClick={() => signInWithGoogle()}><Google /> {option} with Google</button>
            <br />
            <button style={{ width: '400px', fontSize: '25px' }} className='btn btn-warning m-1 text-light' onClick={() => signInWithGithub()}><Github />{option} with GitHub</button>
        </div>
    );
};

export default SocialLogin;