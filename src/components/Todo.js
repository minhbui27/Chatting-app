import React from 'react'
import Tasks from './Tasks'
import { useState } from 'react'
import AddTask_test from './AddTask_test'
import HeaderTodo from './HeaderTodo'

const Todo = (props) => {
    console.log(props.tasks)
    console.log(props.tasks.length)
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])
    
    
    
    
    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1 // assign task to a random id TEMPORARY
        const newTask = { id, ...task }
        setTasks([...tasks, newTask]) // Append to current tasks
        console.log(id)
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }


    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }


    return (
        <div>
            <HeaderTodo onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {/*Ternary Operator. If showAddTask is true, send it to AddTask, else do nothing! */}
            {showAddTask && <AddTask_test onAdd={addTask} />} 
            {props.tasks.length > 0 ? (
                <Tasks tasks={props.tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ( 'No tasks'
            )}
        </div>
    )
}


export default Todo