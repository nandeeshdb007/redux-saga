interface AddToCartInterface {
  productId: string;
}

export const addToCart = ({ productId }: AddToCartInterface) => {
  return {
    type: "ADD_TO_CART_ACTION",
    payload: { productId },
  };
};
