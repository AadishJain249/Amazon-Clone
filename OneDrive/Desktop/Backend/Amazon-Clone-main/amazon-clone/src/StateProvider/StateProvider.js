import { createContext,useReducer,useContext } from "react";
import React from 'react'
import ReactDOM from 'react-dom'
// ye data wrappper hai
export const StateContext=createContext()

//ye provider
export const StateProvider=({children,reduce,initialState})=>(
<StateContext.Provider value={useReducer(reduce,initialState)}>
        {children}
</StateContext.Provider>
)
export const useStateValue=()=>useContext(StateContext)
    