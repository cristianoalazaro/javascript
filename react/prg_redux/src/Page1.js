import React from 'react';
import {useDispatch} from 'react-redux';

import * as example from './store/modules/example/actions';

export default function Page1(){
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(example.clicaBotaoRequest());
    }

    return <button onClick={handleClick}>Click Here</button>
}