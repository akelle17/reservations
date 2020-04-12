export default (state, action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return {
                ...state,
                reservations: [action.payload, ...state.reservations]
            }
        case 'GET_ASSETS':
            return {
                ...state,
                loading: false,
                assets: action.payload
            }
        case 'GET_ASSETS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}