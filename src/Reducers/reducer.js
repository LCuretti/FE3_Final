export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ODONTOLOGOS':
            return {...state, prof: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME':
            return {...state, theme: !state.theme}
        case 'DELETE_FAV':
            const favToRemove = action.payload;
            const updatedFavs = state.favs.filter(fav => fav.id !== favToRemove.id);
            return { ...state, favs: updatedFavs };       
        default:
            return state
        }
    }
