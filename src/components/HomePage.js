import React, {Component} from 'react'
import Navbar from './Navbar';
import Chat from './Chat';
import LeftSidebar from './LeftSidebar';
import Todo from './Todo';
import {auth,db} from './Firebase'


export default class HomePage extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };

    }



    async componentDidMount() {
        this.setState({readError: null});
        try {
            db.ref("tasks").on("value", snapshot => {
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

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }



    render() {
        return (
            <div>
            <div class="container-fluid">
                <Navbar handleLogout={this.handleLogout}/>
                <div class="row justify-content-center" style={{height:"100vh"}} >
                    <div class="col-2"><LeftSidebar /></div>
                    <div class="col-7"><Chat/></div>
                    <div class="col-3"><Todo tasks={this.state.tasks}/></div>
                </div>
            </div>
            </div>


        )
    }
}