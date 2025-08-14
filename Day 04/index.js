import React from "react"; // <-- Make sure this line is active!
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", 
    {   
        'id' : "heading",
        style: {
            color: "black", textAlign: 'center', fontFamily: 'Algerian',
        }
    },
    "Welcome to React World, Hello HIDED"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);