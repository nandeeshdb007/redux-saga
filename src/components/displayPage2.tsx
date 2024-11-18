"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

const DisplayPage2 = () => {
  const selector = useSelector((state: RootState) => state.addToCartReducer);
  console.log(selector.productId);
  return <div>{selector.productId}</div>;
};

export default DisplayPage2;
