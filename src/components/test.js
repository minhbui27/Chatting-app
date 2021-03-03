import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./Accordion";

function accord(){
    return(
        <div>
        <Accordion
        title="What is your return policy?"
        content="none"
        />
        <Accordion
        title="Which languages does you support?"
        content="only english"
        />
        <Accordion
        title="Can I use a custom domain?"
        content="
        <p>nah</p>
        </br>
        <p>no</p>
        </br>
        <p>bruh</p>"
        />
    </div>
    )
}

export default accord