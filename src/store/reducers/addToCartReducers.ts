/* eslint-disable @typescript-eslint/no-explicit-any */
interface InitialStateProps {
  productId: string;
}

const initialState: InitialStateProps = {
  productId: "",
};

interface ActionProps {
  type: string;
  payload?: any;
}

export const addToCartReducer = (
  state = initialState,
  action: ActionProps
): InitialStateProps => {
  switch (action.type) {
    case "ADD_TO_CART_REDUCER":
      return {
        ...state,
        productId: action.payload?.productId,
      };
    default:
      return state;
  }
};
