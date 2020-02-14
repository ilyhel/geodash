
import { makeStorev2 } from "./MakeStoreFactoryV2";


const { Provider, useStore } = makeStorev2({
  
    

    actions: {
      increment: (state,valueparam) => {console.log(`display ${valueparam}`);console.log("decrement****",state.RecState2.width); state.RecState2.width = state.RecState2.width + "30" },
      decrement: (state) => {console.log("decrement nothings")},
      count:(state)=> {return state}
    }
  })

 export {
     Provider,
     useStore
 }
