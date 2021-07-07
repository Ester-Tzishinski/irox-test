export const SET_DATA_JSON = 'SET_DATA_JSON';


export const SaveJsonData = (data) =>{
    return { type: SET_DATA_JSON, payload: data};
}
