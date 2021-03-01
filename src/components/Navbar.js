import React, {Component}from "react"
import {auth} from "./Firebase"

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
        };   
    }
    render() {
        return(<nav className = "Navigation_bar">
            <div style={{display: 'flex', justifyContent: 'center',textAlign: 'center',height:'100%'}}> 
                <p style={{margin: 'auto'}}>Logged in as: <strong>{this.state.user.email}</strong></p>

                <btn class="btn btn-primary btn-block mb-4" onClick={this.props.handleLogout} style={{float:"right",margin:'auto'}}>Logout</btn>
            </div>
        </nav>)
 
    }
   
}

