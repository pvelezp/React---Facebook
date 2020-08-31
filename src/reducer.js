export const initialState = {
    user: null,
    isDark: false,
    likesPost: 0
}

export const actionTypes = {
    SET_USER: 'SET_USER',
    TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
    ADD_LIKE: 'ADD_LIKE'
}

const reducer = (state,action) => {
    console.log(action)
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.TOGGLE_DARK_MODE:
            return {
                ...state,
                isDark: !state.isDark
            }
        case actionTypes.ADD_LIKE: {
            
            const number = action.payload ? -1 : 1
            return {
                ...state,
            likesPost: state.likesPost + number
            }
        }
        default:
            return state
    }
}

export default reducer