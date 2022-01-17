import { createStore, combineReducers } from 'redux';

import { reducer as CompanyReducer } from '../Features/Jobs/reducer';
import { reducer as AdminReducer } from '../Features/Admin/reducer';

const rootReducer = combineReducers({
    companyState: CompanyReducer,
    adminState:AdminReducer,
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("Entire Store", store.getState());