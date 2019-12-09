import { SET_CURRENT_USER, UNSET_CURRENT_USER } from "../types";
import { auth } from '../../firebase/firebase.utils';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})

export const unsetCurrentUser = () => dispatch => {
    auth.signOut();
    dispatch({
        type: UNSET_CURRENT_USER
    })
}