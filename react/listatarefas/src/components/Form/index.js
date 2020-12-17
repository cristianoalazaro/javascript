import React from 'react';
import { FaPlus } from 'react-icons/fa';

import './Form.css';


export default function Form({handleSubmit, handleChange, newTask}){
    return(
        <form action="#" className="form" onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange} value={newTask} />
        <button type="submit">
            <FaPlus />
        </button>
    </form>

    );
}