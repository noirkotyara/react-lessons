import React from 'react';


let StoreContext = React.createContext(null);
export default StoreContext;
export let Provider = (props)=>{
   return( <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>)
}


