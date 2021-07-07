import produce from 'immer';
import { SET_DATA_JSON } from '../actions';

const initialState = {
    eventsDataJson: []
};

export default produce((state, action) =>{
    switch (action.type) {
        case SET_DATA_JSON:
            state.eventsDataJson = action.payload;
            break;
        default: break;
    }
}, initialState)