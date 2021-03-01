import React, { Component, useEffect, useRef } from 'react';
import {auth} from "./Firebase";
import {db} from "./Firebase";



export default class Chat extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            chats: [],
            content: '',
            readError: null,
            writeError: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    async componentDidMount() {
        this.scrollToBottom();
        this.setState({readError: null});
        try {
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val())
                });
                this.setState({chats});
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

    async componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView({behavior: 'smooth'});
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({writeError: null});
        var today = new Date();
        try {
            
            await db.ref("chats").push({
                content: this.state.content,
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
            <div class="px-4 py-5 chat-box">

                <div className="chats">
                    {this.state.chats.map(chat => {
                        // return <p key={chat.timestamp}>{chat.content}</p>
                        return <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted" style={{display:"block"}}>{chat.content}</p>
                            </div>
                            <p class="small text-muted">{chat.timestamp}</p>
                        </div>
                    })}
                </div>

                <form onSubmit={this.handleSubmit} class="bg-light">
                    <div class="input-group">
                        <input type="text" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light"
                        onChange={this.handleChange} value={this.state.content}></input>
                        {this.state.error ? <p>{this.state.writeError}</p> : null}
                        <div class="input-group-append">
                            <button id="button-addon2" type="submit" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                        </div>
                        
                    </div>
                </form>
                <div ref={el => { this.el = el; }} />
            </div>


        )
    }
}