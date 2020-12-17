import React, { useState, useEffect } from 'react';

import './Main.css';
import Form from './Form';
import Tarefas from './Tarefas';

export default function Main() {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        const loadedTasks = JSON.parse(localStorage.getItem('tarefas'));
        if (!loadedTasks) return;
        setTasks(loadedTasks);
    }, [])

    useEffect(() => {
        localStorage.setItem('tarefas',JSON.stringify(tasks));
    }, [tasks]);

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

     const handleSubmit = (event)=>{
        event.preventDefault();
        let taskNow = newTask.trim();
        if(tasks.indexOf(newTask) !== -1) return;
        if(index === -1){
            setTasks([...tasks, taskNow]);
            setNewTask('');            
        } else {
            const editedTasks = [...tasks];
            editedTasks[index] = taskNow;
            setTasks(editedTasks);
            setIndex(-1);

        }
    }

    const handleDelete = (event, index)=>{
        const UpdatedTask = [...tasks];
        UpdatedTask.splice(index,1);
        setTasks([...UpdatedTask]);
    }

    const handleEdit = (event, index)=>{
        setIndex(index);
        setNewTask(tasks[index]);
    }

    return (
        <div className="main">
            <h1>Lista de tarefas</h1>
            <Form newTask = {newTask} handleSubmit={handleSubmit} handleChange={handleChange}/>
            <Tarefas tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    )
}
