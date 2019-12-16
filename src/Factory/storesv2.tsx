
import { makeStorev2 } from "./MakeStoreFactoryV2";


const { Provider, useStore } = makeStorev2({
  
    

    actions: {
      increment: (state) => {console.log("decrement",state);return state},
      decrement: (state) => {console.log("decrement",state)}
    }
  })

 export {
     Provider,
     useStore
 }
