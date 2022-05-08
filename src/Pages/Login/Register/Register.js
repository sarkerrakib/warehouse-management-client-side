import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='log'>
            <div className='register-form'>
                <h2 className='text-light text-center mt-2 pb-3' style={{ textAlign: 'center' }}>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />
                    <input type="email" name="email" id="" placeholder='Email Address' required />
                    <input type="password" name="password" id="" placeholder='password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'ps-2' : 'ps-2 resets'} htmlFor="terms">Accept all Terms and Conditions</label>
                    <input
                        disabled={!agree}
                        className='w-50 mx-auto btn logButton mt-2' type="submit"
                        value="Register" />
                </form>
                <p className='text-light'>Already have an account? <Link to="/login" className='resets pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>

    );
};

export default Register;