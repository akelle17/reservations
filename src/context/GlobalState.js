import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    reservations: [
        { id: 1, text: 'Testing reservation 1', date: new Date() },
        { id: 2, text: 'Testing reservation 2', date: new Date() },
        { id: 3, text: 'Testing reservation 3', date: new Date() }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        reservations: state.reservations
    }}>
        {children}
    </GlobalContext.Provider>);
}