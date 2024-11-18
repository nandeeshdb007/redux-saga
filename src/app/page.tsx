"use client";
import DisplayPage from "@/components/displayPage";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <DisplayPage />
    </Provider>
  );
}
