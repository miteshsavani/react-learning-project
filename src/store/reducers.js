import { combineReducers} from 'redux';
import user from './user/reducer';
import counter from './counter/reducer';

export default function createReducer() {
    return combineReducers({
        user,
        counter
    })
}