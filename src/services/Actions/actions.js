import {SAVE_RECORD} from "../Constants";

export const saveRecord = (data) => {
    // console.log(data);
    return {
        type: SAVE_RECORD,
        data
    }
}