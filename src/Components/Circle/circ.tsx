import React from "react";
import { Provider, useStore } from "../../Factory/stores";
import { IRectState } from "./IStates";


// Componenets expose State to provider
const CIRCExposer = (props) => {
    
 console.log("this  1 ",this) ;
//Init state as this.state
const RecState:IRectState = {
    width:"",
    height:""
};

    return (
        <>
            <Provider InitialValue={{ RecState }}>
                <Circ {...props}></Circ>
            </Provider>

        </>
    );
}


const Circ = (props) => {
    console.log("props 2 ",props) ;
    //IStates{ width:"120"}
    const [state, setState] = useStore() as any[];
    console.log("state",state);
    return (
        <>
           <div>
            <h1>it is a circle </h1>
            <svg width="100" height="200"  id="svg2">
                <circle cx="50" cy="50" r="50"  className="gshape"/>
            </svg>
            <button>reset</button>
            <button>change Config</button>
            <button>Set Color</button>
            </div>
        </>
    );

}

export default CIRCExposer;