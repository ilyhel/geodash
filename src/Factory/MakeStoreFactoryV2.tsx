import React, { useContext, useMemo, useState } from "react";
export function makeStorev2({actions }) {
    const context = React.createContext({});
    const Provider = (props: any) => {
        const [state, setState] = useState(props.InitialValue);

        const boundActions = {}
        Object.keys(actions).forEach(key => {
          boundActions[key] = (...args) => 
            setState(old => actions[key](old, ...args))
        })

        const contextValueProps = useMemo(() => [state, boundActions], [state]);
        return (

            <context.Provider value={contextValueProps}>

                {props.children}

            </context.Provider>);
    };
    const useStore = () => useContext(context);
    return { Provider, useStore };
}
