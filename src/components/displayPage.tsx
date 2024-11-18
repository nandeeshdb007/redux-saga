import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/addToCart";
import { AppDispatch } from "@/store/store";

function DisplayPage() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-full flex items-center justify-center">
      <button
        onClick={() => dispatch(addToCart({ productId: "abbabab" }))}
        className="bg-red-400 text-white"
      >
        Click me
      </button>
    </div>
  );
}

export default DisplayPage;
