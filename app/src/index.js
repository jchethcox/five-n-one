import React from "react";
import { render } from "react-dom";
import "tachyons";
import { Provider } from "react-redux";
import store from "./store";
import { setColors } from "./action-creators/colors";
import { setBuzzwords } from "./action-creators/buzzwords";
import { setStarwars } from "./action-creators/starwars";
import { setCookies } from "./action-creators/fortune-cookies";
import { setEmojis } from "./action-creators/emojis-list";

import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(setColors);
store.dispatch(setBuzzwords);
store.dispatch(setStarwars);
store.dispatch(setCookies);
store.dispatch(setEmojis);
