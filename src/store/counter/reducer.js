import { handleActions } from "redux-actions";
import * as actionsCreator from './actions';

const initialState = {
    count: 0
}

export default handleActions({
    [actionsCreator.addCount]: (state, action) => {
        return {
           ...state,
            count: action.payload

        }
    }
},
    initialState
)