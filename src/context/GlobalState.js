import React, { createContext, useReducer } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';

import AppReducer from './AppReducer';

const initialState = {
    reservations: [],
    assets: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const { authState } = useOktaAuth();

    async function getAssets() {
        try {
            if (authState.isAuthenticated) {
              const { accessToken } = authState;
              
              const config = {
                headers: { Authorization: `Bearer ${accessToken}` }
              }

              const res = await axios.get('http://localhost:8000/api/v1/assets', config);

              dispatch({
                  type: 'GET_ASSETS',
                  payload: res.data.data
              });
            } else {
              // send unauthorized
            }
            
        } catch (err) {
            console.log(err)
            dispatch({
                type: 'GET_ASSETS_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        error: state.error,
        loading: state.loading,
        reservations: state.reservations,
        assets: state.assets,
        getAssets,
    }}>
        {children}
    </GlobalContext.Provider>);
}