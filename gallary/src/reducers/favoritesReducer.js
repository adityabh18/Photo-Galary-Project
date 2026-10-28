/**
 * @description reducer function for state management
 */
function favoritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const photoExists = state.some(
        (photo) => photo.id === action.payload.id
      );

      if (photoExists) {
        return state.filter(
          (photo) => photo.id !== action.payload.id
        );
      }

      return [...state, action.payload];
    }

    case "LOAD_FAVORITES":
      return action.payload;

    default:
      return state;
  }
}

export default favoritesReducer;