//rxreducer
const initialState = [
    {email:'1',name:'1',password:'1'},
    {email:'2',name:'2',password:'2'},
    {email:'3',name:'3',password:'3'}
]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'HANDLE_SUBMIT': {
        const values = {...payload};
        console.log(values);
        let newState = [...state,values];
        state = newState;
       
       return state;
    };
    case 'DEL_USER':{
        let newState = [...state];
        newState = newState.filter(item => item.email !== payload);
        return newState;
    }

  default:
    return state
  }
}
