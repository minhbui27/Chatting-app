import React from "react";
import Login from "./Login.js"
import Logout from "./Logout.js"

const Background = () => {
    return <div className="container-fluid">
        <div class="col justify-content-center">
            <div class="row" style={{height: "25vh"}}></div>
            <div class="row justify-content-center">
                <div class="col-4" id="login-box" style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '50vh'}}>
                    <div class = "col-align-center">
                        <div class = "row"><Login /></div>
                        <div class = "row"><Logout /></div>
                    </div>
                </div>
            </div>
            <div class="row" style={{height: "25vh"}}></div>
        </div>
    </div>
}

export default Background;