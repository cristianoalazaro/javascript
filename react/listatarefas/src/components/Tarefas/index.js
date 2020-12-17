import React from 'react';
import {FaEdit, FaWindowClose} from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({tasks, handleEdit, handleDelete}){
    return (
        <ul className="task">
        {tasks.map((task,index) => (
            <li key={task}>{task}
                <span>
                    <FaEdit className="edit" onClick={(event)=>handleEdit(event,index)} />
                    <FaWindowClose className="delete" onClick={(event)=>handleDelete(event,index)} />
                </span>
            </li>
        ))}
    </ul>
    )
}