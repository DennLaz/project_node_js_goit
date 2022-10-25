import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUser } from "../../redux/auth/authOperations";

import { useParams} from 'react-router-dom';

import {setTokenToRedux} from "../../redux/auth/authSlice"


const AuthSocial = () => {
    const { token } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
    
        dispatch(setTokenToRedux(token));
        
        dispatch(getUser())
 
    console.log(token);
        
    },[token])

    return (
        <>
        </>
    )
}

export default AuthSocial;