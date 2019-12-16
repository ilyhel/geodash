import React from "react";
import { Provider, useStore } from "../../Factory/stores";
import { IRectState } from "./IStates";
import  "./style.css"
import { IRectProps } from "../Circle/IProps";
import { JsonDecoder } from 'ts.data.json';
import { serialize, deserialize } from "v8";

// Componenets expose State to provider
const RECTExposer = (props) => {
     
 console.log("this  1 ",props.this.properties) ;
//Init state as this.state

//Cast Properties 


const castedProperties = "";
console.log("casted porp ", castedProperties)

const RecState:IRectState = {
    width:"100",
    height:"100"
};

//Old props passed to component is porps directly
    return (
        <>
            <Provider InitialValue={{ RecState }}>
                <Rect {...props}></Rect>
            </Provider>

        </>
    );
}


// connect(state=>({propName:state.prop}),{function1, function2})(bindToComponenets)
const Rect = (props) => {
    console.log("props 2 ",props) ;
    //IStates{ width:"120"}
    const [state] = useStore() as any[];
    console.log("state",state);
    return (
        <>
         <div>
            <h1>it is a rect </h1>
            <svg width="100" height="200"  id="svg">
                <rect width={state.RecState.width} height={state.RecState.height} x="50" y="20" className="bshape" />
            </svg>
            <button>reset</button>
            <button>incriment width</button>
            <button>incriment height</button>
            <button>Set Color</button>
            </div>
        </>
    );

}

export default RECTExposer;