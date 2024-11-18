/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeEvery } from "redux-saga/effects";
import { Action } from "redux";

interface AddToCartAction extends Action {
  type: string;
  payload: any;
}

// Saga function
function* AddToCartSaga(action: AddToCartAction) {
  yield put({ type: "ADD_TO_CART_REDUCER", payload: action.payload });
}

// Watcher saga
function* mySaga() {
  yield takeEvery<AddToCartAction>("ADD_TO_CART_ACTION", AddToCartSaga);
}

export default mySaga;
