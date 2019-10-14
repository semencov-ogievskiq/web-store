const initialState = {
    user: {
        id: null,
        login: null,
        fam: null,
        im: null,
        otch: null
    }
}

export default function(state = initialState, action){
    switch (action.type){
        case "AUTH": {
            return {...state,user:
                {
                    id: 1,
                    login: "admin",
                    fam: "Иванов",
                    im: "Иван",
                    otch: "Иванович"
                }}
            
        }
        default:
            return state;
    }
}