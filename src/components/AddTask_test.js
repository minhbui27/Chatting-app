import React, { Component,} from 'react';
import {auth} from "./Firebase";
import {db} from "./Firebase";



export default class AddTask_test extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            tasks: [],
            text: '',
            day: '',
            reminder: false,
            readError: null,
            writeError: null,
        };

        this.changeTask = this.changeTask.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.changeReminder = this.changeReminder.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    async componentDidMount() {
        this.setState({readError: null});
        try {
            db.ref("chats").on("value", snapshot => {
                let tasks = [];
                snapshot.forEach((snap) => {
                    tasks.push(snap.val())
                });
                this.setState({tasks});
            });
        }
        catch(error) {
            this.setState({readError: error.message});
        }
    }

    changeTask(event) {
        this.setState({
            text: event.target.value
        });
    }

    changeTime(event) {
        this.setState({
            day: event.target.value
        });
    }

    changeReminder(event) {
        this.setState({
            reminder: event.target.value
        });
    }

    

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({writeError: null});
        var today = new Date();
        try {
            
            await db.ref("tasks").push({
                text: this.state.text,
                day: this.state.day,
                reminder: this.state.reminder,
                timestamp: 
            today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),

                uid: this.state.user.uid
            })
            this.setState({content: ''})
        } catch(error) 
        {
            this.setState({writeError: error.message})
        }
    }

    render() {
        return (
            <form className='add-form' onSubmit={this.handleSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={this.state.task} onChange={this.changeTask}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Date' value={this.state.time} onChange={this.changeTime}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={this.state.reminder} value={this.state.reminder} onChange={this.changeReminder}/>
            </div>
            <input type='submit' value='Save' className='btn-todo btn-todo-block'>
            </input>
        </form>


        )
    }
}