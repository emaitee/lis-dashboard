import { TOGGLEMAILNAV } from "./type"

export function toggleEmailNav(){
    return dispatch => {
        dispatch({ type: TOGGLEMAILNAV})
    }
}