"use client"
import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import DisplayPage2 from "@/components/displayPage2";

function DisplayPage() {
  return (
    <Provider store={store}>
      <DisplayPage2 />
    </Provider>
  );
}

export default DisplayPage;
