import React from 'react'
import Navbar from './Navbar';
import Chat from './Chat';
import Todo from './Todo';

function HomePage({handleLogout}) {
    return(
        <div class="container-fluid">
            <Navbar handleLogout={handleLogout}/>
            <div class="row justify-content-center" style={{height:"100vh"}} >
                <div class="col-2"></div>
                <div class="col-7"><Chat/></div>
                <div class="col-3"><Todo/></div>
            </div>
        </div>
    )
}

export default HomePage;