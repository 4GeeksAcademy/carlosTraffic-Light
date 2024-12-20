import React from "react";
import {useState} from "react";
const TrafficLight = () => {
    const [ color, setColor] = useState("red");

      return  (<div className="semaforo">
          <div className=" text-center rounded" style={{width: "80px", height: "220px", background: "black"}}>
          <button onClick={()=>setColor("red")} className={`red` + (color === "red" ? " iluminado" : "" )}></button>
          <button onClick={()=>setColor("yellow")} className={`yellow` + (color === "yellow" ? " iluminado" : "" )}></button>
          <button onClick={()=>setColor("green")} className={`green` + (color === "green" ? " iluminado" : "" )}></button>
        </div>
        </div>
    );
    };

    export default TrafficLight;