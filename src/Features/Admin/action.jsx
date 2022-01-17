import {
    ADMIN_SIGNIN,
    ADMIN_LOGIN,
    ADMIN_LOGOUT,
    ADMIN_ADD_JOBS,
    LOGIN_SUCCESS

} from './actionTypes';

export const adminSignIn = (payload) => {
    return {
        type: ADMIN_LOGIN,
        payload: payload,
    }
}



export const adminLogin = (payload) => {
    return {
        type: ADMIN_LOGIN,
        payload: payload,
    }
}

export const adminLogout = (id) => {
    return {
        type: ADMIN_LOGOUT,
        payload: id,
    }
}

export const adminAddJobs = (payload) => {
    return {
        type: ADMIN_ADD_JOBS,
        payload: payload,
    }
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload,
    }
}