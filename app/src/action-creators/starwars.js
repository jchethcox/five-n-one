import fetch from "isomorphic-fetch";
import { SET_STARWARS } from "../constants";
const url = "http://localhost:5000/starwars";

export const setStarwars = async (dispatchEvent, getState) => {
  const starwars = await fetch(url).then(res => res.json());
  dispatch({ type: SET_STARWARS, payload: starwars });
};
