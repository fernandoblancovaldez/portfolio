import { CLEAR_SHOWS, ON_OFF_LOADER, SEARCH_SHOW } from "../types";

export const initialState = {
  shows: [],
  loading: false,
};

export function tvSearcherReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SHOW: {
      let newShows = [];
      action.payload.forEach((el) => {
        let show = {
          key: el.show.id,
          name: el.show.name,
          text: el.show.summary
            ? el.show.summary.replace(/<[^>]*>/g, "")
            : "Sin descripción",
          img: el.show.image
            ? el.show.image.medium
            : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png",
          url: el.show.url ? el.show.url : "#",
        };
        newShows = [...newShows, show];
      });
      return { ...state, shows: newShows };
    }
    case ON_OFF_LOADER: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case CLEAR_SHOWS: {
      return {
        ...state,
        shows: [],
      };
    }
    default:
      return state;
  }
}
