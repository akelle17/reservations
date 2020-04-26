import React, { createContext, useReducer } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';

import AppReducer from './AppReducer';
import AddAssetModalForm from '../components/asset/AddAsset';

const initialState = {
    reservations: [],
    assets: [],
    asset: null,
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
            type: 'ASSET_ERROR',
            payload: err.response.data.error
        });
      }
    }


    async function getAsset(id) {
      try {
        if (authState.isAuthenticated) {
          const { accessToken } = authState;
            
          const config = {
            headers: { Authorization: `Bearer ${accessToken}` }
          }

          const res = await axios.get(`http://localhost:8000/api/v1/assets/${id}`, config);

          dispatch({
              type: 'GET_ASSET',
              payload: res.data.data
          });
        } else {
          // send unauthorized
        }
        
      } catch (err) {
        dispatch({
            type: 'ASSET_ERROR',
            payload: err.response.data.error
        });
      }
    }

    async function addAsset(asset) {
      try {
        if (authState.isAuthenticated) {
          const { accessToken } = authState;
            
          const config = {
              headers: { Authorization: `Bearer ${accessToken}` }
          }

          const res = await axios
                              .post(
                                'http://localhost:8000/api/v1/assets', 
                                asset,
                                config);

          dispatch({
              type: 'ADD_ASSET',
              payload: res.data.data
          });
        } else {
          // send unauthorized
        }
            
      } catch (err) {
          dispatch({
              type: 'ASSET_ERROR',
              payload: err.response.data.error
          });
      }
    }

    async function deleteAsset(id) {
      try {
        if (authState.isAuthenticated) {
          const { accessToken } = authState;
            
          const config = {
              headers: { Authorization: `Bearer ${accessToken}` }
          }

          const res = await axios
                              .delete(
                                `http://localhost:8000/api/v1/assets/${id}`,
                                config);

          dispatch({
              type: 'DELETE_ASSET',
              payload: res.data.data
          });
        } else {
          // send unauthorized
        }
            
      } catch (err) {
          dispatch({
              type: 'ASSET_ERROR',
              payload: err.response.data.error
          });
      }
    }

    return (<GlobalContext.Provider value={{
        error: state.error,
        loading: state.loading,
        reservations: state.reservations,
        assets: state.assets,
        asset: state.asset,
        getAsset,
        getAssets,
        addAsset,
        deleteAsset
    }}>
        {children}
    </GlobalContext.Provider>);
}