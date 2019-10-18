const initialState = {
    user: false,
    group: [
        "Гость"
    ],
    auth: {
        modal: false,
        login: "",
        password: ""
    }
}

export default  function(state = initialState, action){
    switch (action.type){
        case "SIGN_IN": {
            return {...state,user:
                {
                    id: 1,
                    login: "admin",
                    fam: "Иванов",
                    im: "Иван",
                    otch: "Иванович"
                }}
            
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