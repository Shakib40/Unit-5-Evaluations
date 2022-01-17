import { ADD_JOBS } from './actionTypes';

export const addJobs = (payload) => {
    return {
        type: ADD_JOBS,
        payload: payload,
    }
}
