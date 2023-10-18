

export const Reducer =(state,action)=>{

 if ( action.type=="abc") {
    return [action.payload];
    
 } else {
    return null;
 }   

}