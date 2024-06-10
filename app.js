import React from "react";

import ReactDOM from "react-dom/client";
{/* <div id:"parent">
    <div id:"child">
        <h1></h1>
        <h1></h1>
    </div>
</div> */}

const parent = React.createElement("div",
    {id:"parent"},
        [React.createElement(
            "div",
            {id:"child"},
           [ React.createElement("h1",{}, "hello"),
            React.createElement("h2",{}, "hell")]
        ),React.createElement(
            "div",
            {id:"child2"},
           [ React.createElement("h1",{}, "hii"),
            React.createElement("h2",{}, "hello")]
        )]
);

// const heading = React.createElement("h1",{id:"heading"},"Hello world from react");
 const root = ReactDOM.createRoot(document.querySelector("#root"));    
// root.render(heading);
root.render(parent);