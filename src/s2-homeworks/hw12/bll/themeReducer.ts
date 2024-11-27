const initState = {
    themeId: 1,
}

export type InitStateType = typeof initState;

export type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID';
    id: number;
};

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }

        default:
            return state
    }
}


export const changeThemeId = (id: number): ChangeThemeIdActionType => ({
    type: 'SET_THEME_ID',
    id,
});

