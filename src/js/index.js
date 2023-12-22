//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";


let seconds = 0

function incrementSeconds () {
    seconds += 1;
    console.log(seconds)
    //render your react application
    ReactDOM.render(<SecondsCounter seconds={seconds} />,document.querySelector("#app"));
}

let myInterval = setInterval(incrementSeconds, 1000);






