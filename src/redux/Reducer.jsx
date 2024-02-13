const initialState = {
    user: [],
    error:''
  };

  const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "Success":
            return{
                user:action.payload,
                error:''
            }
            case "Error":
                return{
                    user:[],
                    error:'error'

                }
                default:
                    return state

    }
  }

  export default reducer