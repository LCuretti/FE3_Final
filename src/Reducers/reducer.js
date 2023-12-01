export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ODONTOLOGOS':
            return {...state, prof: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME':
            return {...state, theme: false}
        case 'DELETE_FAV':
            return {...state, favs: [],}        
        default:
            return state
        }
    }
