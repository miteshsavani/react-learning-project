import { handleActions } from 'redux-actions';
import * as actionsCreator from './actions';

const initialState = {
    data: [],
    name: 'User'
}

export default handleActions (
    {
        [actionsCreator.addData]: (state, action) => {
            return {
                ...state,
                data: action.payload.data
            }
        }
    },
    initialState
)