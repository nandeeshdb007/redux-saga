interface InitialStateProps {
  productId: string;
}

const initialState: InitialStateProps = {
  productId: "abckd",
};

interface ActionProps {
  type: string;
  payload?: string;
}

export const addToCartReducer = (
  state = initialState,
  action: ActionProps
): InitialStateProps => {
  switch (action.type) {
    case "ADD_TO_CART_REDUCER":
      return {
        ...state,
        productId: action.payload || state.productId,
      };
    default:
      return state;
  }
};
