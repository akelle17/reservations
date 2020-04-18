export default (state, action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return {
                ...state,
                reservations: [action.payload, ...state.reservations]
            }
        case 'ADD_ASSET':
            return {
                ...state,
                assets: [action.payload, ...state.assets]
            }
        case 'GET_ASSETS':
            return {
                ...state,
                loading: false,
                assets: action.payload
            }
        case 'ASSET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}