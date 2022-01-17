const initialState = { admins: [], token: "", setName: "" };


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "ADMIN_SIGNIN": {
            return {
                ...state,
                admins: [...state.admins, payload]
            }
        }

        case "ADMIN_LOGIN": {
            return {
                ...state,
                admins: payload,
            }
        }

        case "LOGIN_SUCCESS": {
            return {
                token: payload,
            }
        }

        case "ADMIN_LOGOUT": {
            return {
                ...state,
                token: "",
            }
        }

        case "ADMIN_ADD_JOBS": {
            return {
                ...state,
                todos: [...state.todos, payload],
            }
        }

        default:
            return state
    }
};

export { reducer }