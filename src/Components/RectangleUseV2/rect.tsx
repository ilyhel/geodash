import React from "react";
import { Provider, useStore } from "../../Factory/storesv2";
import { IRectState } from "./IStates";
import  "./style.css"
import { IRectProps } from "../Circle/IProps";
import { JsonDecoder } from 'ts.data.json';
import { serialize, deserialize } from "v8";





// Componenets expose State to provider
const RECTv2Exposer = (props) => {
     
 console.log("this  1 ",props.this.properties) ;
//Init state as this.state

//Cast Properties 


const castedProperties = "";
console.log("casted porp ", castedProperties)

const RecState2:IRectState = {
    width:"100",
    height:"100"
};

//Old props passed to component is porps directly
    return (
        <>
            <Provider InitialValue={{ RecState2 }}>
                <Rectv2 {...props}></Rectv2>
            </Provider>

        </>
    );
}


// connect(state=>({propName:state.prop}),{function1, function2})(bindToComponenets)
const Rectv2 = (props,{}) => {
    console.log("props 2 ",props) ;
    //IStates{ width:"120"}
   
    const [_,  {increment} ] = useStore() as any[];
  
    console.log("useStore",_)
    return (
        <>
         <div>
            <h1>it is a rect </h1>
            <svg width="100" height="200"  id="svg">
                <rect width="50" height="50" x="50" y="20" className="bshape" />
            </svg>
            {_.RecState2.width}
            <button>reset</button>
            <button onClick={() => {increment(2)}}>incriment width</button>
            <button>incriment height</button>
            <button>Set Color</button>
            </div>
        </>
    );

}

export default RECTv2Exposer;