import { all } from "redux-saga/effects";
import mySaga from "./sagas/addToCartSaga";

export default function* rootSaga() {
  yield all([mySaga()]);
}
