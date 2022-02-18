import { createStore, createHook, defaults } from "react-sweet-state";
import initialState from "./initialState";
import actions from "./actions";
defaults.devtools = true;

const HomeStore = createStore({
  name: "HomeStore",
  initialState,
  actions,
});

export const useHomeStore = createHook(HomeStore, {
  selector: (state) => state,
});
