interface AddToCartInterface {
    poductId: string;
}

export const Add_to_cart = ({ poductId }:AddToCartInterface) => {
  return {
    type: "ADD_TO_CART_ACTION",
    payload: poductId,
  };
};
