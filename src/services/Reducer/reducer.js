import {SAVE_RECORD} from "../Constants";
const inititalState ={
    recordData: []
}

export default function recordItems(state=[],action){
    switch (action.type) {
        case SAVE_RECORD:
            console.log(action);
            return [
                ...state,
                {recordData: action.data}
            ]
        default:
            return state
    }
}
