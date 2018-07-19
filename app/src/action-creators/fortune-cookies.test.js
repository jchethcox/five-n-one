import { setCookies } from "./fortune-cookies";
import { SET_COOKIES } from "../constants";

test("get and dispatch cookies from the api server", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_COOKIES);
    expect(action.payload.length).toBeGreaterThan(0);
  }
  setCookies(mockDispatch);
});
