import React from 'react';
import {useDispatch} from 'react-redux';

import './Page1.css';

export default function Page1(){
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch({
            type:'BOTAO_CLICADO',
        })
    }

    return <button onClick={handleClick}>Clique aqui</button>
}