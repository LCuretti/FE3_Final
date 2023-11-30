export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {
                ...state,
                list: action.payload,
            }
        case 'ADD_FAV':
            return {
                ...state,
                favs: [],
            }
        default:
            return state
        }
    }
