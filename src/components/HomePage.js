import React from 'react'
import Navbar from './Navbar';

function HomePage({handleLogout}) {
    return(
        <div class="container-fluid">
            <Navbar />
            <btn class="btn btn-primary btn-block mb-4" onClick={handleLogout}>Logout</btn>
            <div class="row justify-content-center" style={{height:"100vh"}} >
                <div class="col-2"></div>
                <div class="col-7"></div>
                <div class="col-3"></div>
            </div>
        </div>
    )
}

export default HomePage;