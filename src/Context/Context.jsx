import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/reducer";
import axios from "axios";

const odonContext = createContext();
const initialState = {
    prof: [],
    favs: JSON.parse(localStorage.getItem("favs")) || [],
    theme: false
}
const Context = ({children}) => {
    
    const [state, dispacht] = useReducer(reducer, initialState)
    
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        axios(url)
        .then(res => dispacht({type: 'GET_ODONTOLOGOS', payload: res.data}))
    }, [])

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs))
    }, [state.favs])
    return (
        <odonContext.Provider value={{state, dispacht}}>
            {children}
        </odonContext.Provider>
    )

}

export default Context

export const useOdonContext = () => useContext(odonContext)