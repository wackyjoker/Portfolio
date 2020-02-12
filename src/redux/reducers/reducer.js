//expense reducers

const commentsReducerDefaultState = [];

export default (state=commentsReducerDefaultState,action)=>{
switch(action.type){
    case 'ADD_COMMENT':
   return [
       ...state,
       action.expense
   ];
   case'REMOVE_COMMENT':
    return state.filter(({id})=> id !== action.id);
   case 'EDIT_COMMENT':
    return state.map((comment)=>{
        if(comment.id===action.id){
          return {...comment,...action.updates};
        } else {
            return comment;
        }
    });
    default: 
    return state;
   }
};
