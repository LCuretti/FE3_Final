import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/reducer";
import axios from "axios";

const CharContext = createContext();
const initialState = {
    list: [],
    favs: [],
    theme: false
}
const Context = ({children}) => {
    
    const [state, dispach] = useReducer(reducer, initialState)
    console.log(state)
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        axios(url)
        .then(res => dispach({type: 'GET_CHARACTERS', payload: res.data}))
    }, [])

    return (
        <CharContext.Provider value={{state, dispach}}>
            {children}
        </CharContext.Provider>
    )

}

export default Context

export const useCharContext = () => useContext(CharContext)