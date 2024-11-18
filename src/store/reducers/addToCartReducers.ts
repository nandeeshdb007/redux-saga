interface initialStateProps{
    productId:string
}

const initialState:initialStateProps  = {
  productId: "";
}

export const addToCartReducer = (initialState:initialStateProps, action:any) => {
    switch(action.type){
        case 'ADD_TO_CART_REDUCER':
            return {
                ...initialState,
                productId: action.payload
            }
        default:
             return initialState
        
    }
};
