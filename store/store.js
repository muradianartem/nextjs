import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { reducer } from "./reducer";

export const initializeStore = (context) => createStore(reducer);

export const wrapper = createWrapper(initializeStore, { debug: true });
