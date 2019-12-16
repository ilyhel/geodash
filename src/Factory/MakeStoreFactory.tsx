import React, { useContext, useMemo, useState } from "react";
export function makeStore() {
    const context = React.createContext({});
    const Provider = (props: any) => {
        const [state, setState] = useState(props.InitialValue);

        const contextValueProps = useMemo(() => [state, setState], [state]);
        return (

            <context.Provider value={contextValueProps}>

                {props.children}

            </context.Provider>);
    };
    const useStore = () => useContext(context);
    return { Provider, useStore };
}
