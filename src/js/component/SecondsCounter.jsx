import React, { useEffect } from "react";


const SecondsCounter = (props) => {
  let first = Math.floor(props.seconds / 1) % 10;
  let second = Math.floor(props.seconds / 10) % 10;
  let third = Math.floor(props.seconds / 100) % 10;
  let fourth = Math.floor(props.seconds / 1000) % 10;
  let fifth = Math.floor(props.seconds / 10000) % 10;
  let sixth = Math.floor(props.seconds / 100000) % 10;

  useEffect(() => {
    const intervalId = setInterval(() => {
    alert("Han pasado 10 segundos");
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      <div className="bg-light d-flex justify-content-center text-center mt-3 p-5">
        <div
          className="bg-success text-black mx-2 border border-5 border-dark"
          style={{ width: "7rem", height: "7rem", fontSize: "4rem" }}
        >
          <i className="far fa-clock"></i>
        </div>
        <div
          className="bg-light text-black mx-2 border border-5 border-dark"
          style={{ width: "7rem", height: "7rem", fontSize: "4rem" }}
        >
          {sixth}
        </div>
        <div
          className="bg-light text-black mx-2 border border-5 border-dark"
          style={{ width: "7rem", height: "7rem", fontSize: "4rem" }}
        >
          {fifth}
        </div>
        <div
          className="bg-light text-black mx-2 border border-5 border-dark"
          style={{ width: "7rem", height: "7rem", fontSize: "4rem" }}
        >
          {fourth}
        </div>
        <div
          className="bg-light text-black mx-2 border border-5 border-dark"
          style={{ width: "7rem", height: "7rem", fontSize: "4rem" }}
        >
          {third}
        </div>
        <div
          className="bg-light text-black mx-2 border border-5 border-dark"
          style={{ width: "7rem", height: "7rem", fontSize: "4rem" }}
        >
          {second}
        </div>
        <div
          className="bg-light text-black mx-2 border border-5 border-dark"
          style={{ width: "7rem", height: "7rem", fontSize: "4rem" }}
        >
          {first}
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
