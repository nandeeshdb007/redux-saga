"user client";
import { combineReducers } from "@reduxjs/toolkit";
import { addToCartReducer } from "./reducers/addToCartReducers";

const rootReducer = combineReducers({
  addToCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
