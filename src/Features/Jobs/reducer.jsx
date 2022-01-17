const initialState = { companyJob: [], };


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "ADD_JOBS": {
            return {
                ...state,
                companyJob: [...state.companyJob, payload]
            }
        }

        default:
            return state
    }
};

export { reducer }