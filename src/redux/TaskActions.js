import { ActionTypes } from "./ActionTypes"
export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user
    }
}
export const setMode = (mode) => {
    return {
        type: ActionTypes.DARK_MODE,
        payload: mode
    }
}




