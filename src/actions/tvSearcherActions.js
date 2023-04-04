import { CLEAR_SHOWS, ON_OFF_LOADER, SEARCH_SHOW } from "../types";

export const onOffLoader = (boolean) => ({
  type: ON_OFF_LOADER,
  payload: boolean,
});

export const searchShow = (inputText) => {
  return async (dispatch) => {
    dispatch(onOffLoader(true));
    let res = await fetch(`https://api.tvmaze.com/search/shows?q=${inputText}`),
      json = await res.json();
    dispatch({
      type: SEARCH_SHOW,
      payload: json,
    });
    dispatch(onOffLoader(false));
  };
};

export const clearShows = () => ({ type: CLEAR_SHOWS });
