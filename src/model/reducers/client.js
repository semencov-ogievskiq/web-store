const initialState = {
    client:{
        id: null,
        login: null,
        f: null,
        i: 'Гость',
        o: null,
        groups: [0]
    },
    auth:{
        Fetch: false,
        err: false,
        errMsg: null
    }
}

export default  function(state = initialState, action){
    switch (action.type){
        case "SIGN_IN": {
            return {
                ...state,
                client:{
                    id: 1,
                    login: "admin",
                    f: "Семенцов-Огиевский",
                    i: "Алексей",
                    o: "Михайлович",
                    groups: [1]
                }
            }
        }
        case "SIGN_OUT":{
            return {...state,user:
                {
                    id: null,
                    login: null,
                    fam: null,
                    im: null,
                    otch: null
                }}
        }
        case "SIGN_UP":{
            return state;
        }
        case "SHOW_MODAL_AUTH":{
            return {...state,auth:
                {
                    ...state.auth,
                    modal:true
                }}
        }
        default:
            return state;
    }
}