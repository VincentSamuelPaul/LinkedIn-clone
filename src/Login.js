import React, { useState, useEffect } from 'react'
import './Login.css';
import { app, auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile, getAuth, signInWithEmailAndPassword,  } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { setPersistence, browserSessionPersistence } from "firebase/auth";


const Login = ({ setUser, user }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if (localStorage.getItem('userCred')) {
            const userCred = JSON.parse(localStorage.getItem('userCred'));
            setUser(userCred);
        }
    }, [])

    const register = () => {
        if (!name) {
            return "Please enter a full name";
        }

        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profile
            }
            )
            .then(() => {
                setUser(userAuth);
                localStorage.setItem('userCred', JSON.stringify(userAuth));
            })
        }).catch(
        (err) => alert(err)
        );
    }

    const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const _user = userCredential.user;
            setUser(_user);
            if (!localStorage.getItem('userCred')) {
                localStorage.setItem('userCred', JSON.stringify({name:_user.displayName, email:_user.email, profile:_user.photoURL}));
            }
        })
    }

    return (
        <div className='login'>
            <img src='https://www.pngkey.com/png/detail/14-143268_file-linkedin-logo-svg-linkedin-logo-png-no.png' alt='' />
        
            <form >
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name required if registered'/>
                <input placeholder='Profile Pic URL (optional)' value={profile} onChange={(e) => setProfile(e.target.value)} type='text' />
                <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                <input placeholder='Password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                <button type='submit' onClick={loginUser}>Sign In</button>
            </form>
            <p>Not a user?{' '}
            <span className='login__register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login