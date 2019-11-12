const initialState = {
    show: false
}

export default  function(state = initialState, action){
    switch (action.type){
        case "AUTH_SHOW": {
            return {
                ...state,
                show: true
            }
        }
        case "AUTH_CLOSE":{
            return {
                ...state,
                show: false
            }
        }
        default:
            return state;
    }
}