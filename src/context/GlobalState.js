import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';
import config from '../config/config';

const initialState = {
    reservations: [],
    assets: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getAssets() {
        try {
            const res = await axios.get(config.resourceServer.assetUrl);

            dispatch({
                type: 'GET_ASSETS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'GET_ASSETS_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        reservations: state.reservations
    }}>
        {children}
    </GlobalContext.Provider>);
}