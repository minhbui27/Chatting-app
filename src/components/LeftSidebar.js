import React, {useState, useEffect} from 'react'
import {auth} from "./Firebase";
import {db} from "./Firebase";
import Accordion from "./Accordion";

import "./styles/styles2.css"

function LeftSidebar(){
    return (
        <div className="Left_Sidebar">
            <h3 className="classes">Class Name</h3>
            
            <div>
            <Accordion
            title="Notes"
            content="
                <p>Lecture 1</p>
                </br>
                <p>Lecture 2</p>
                </br>
                <p>Lecture 3</p>"
            />
            <Accordion
            title="Pictures"
            content="
                <p>Zoom SS</p>
                </br>
                <p>Textbook</p>"
            />
            <Accordion
            title="Important"
            content="
                <p>nah</p>
                </br>
                <p>no</p>
                </br>
                <p>bruh</p>"
            />
        </div>

                </div>
            )
}

export default LeftSidebar

{/* <div className="dropdown">
                <p onclick="accord()" className="dropbtn">Notes</p>
                    <div className="dropdown-content">
                        <a href="#">Lecture 1</a> */}
                        {/* <a href="#">Link 2</a>
                        <a href="#">Link 3</a> */}
            //         </div>
            // </div>