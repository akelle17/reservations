export default (state, action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return {
                ...state,
                reservations: state.reservations.filter(reservation => reservation.id !== action.payload)
            }
        default:
            return state;
    }
}