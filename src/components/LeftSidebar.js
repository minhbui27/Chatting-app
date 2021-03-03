import React, {useState, useEffect} from 'react'
import {auth} from "./Firebase";
import {db} from "./Firebase";

function test(){
    document.getElementById("test").style.color = "red";
}

function LeftSidebar(){
    return (
        <div className="Left_Sidebar">
            {/* <div className="container"> */}
                {/* <div className="row-3"> */}
                    <h3 style={{paddingTop:'5%'}}>Class Name</h3>
                    <p id="test" onClick="test()">testnjewnfjasldkjfnwefns;aidfnienflasjfahewfn</p>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default LeftSidebar