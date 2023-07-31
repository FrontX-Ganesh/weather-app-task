const weatherReducer = (state, action) => {
  switch (action.type) {
    case "SET_CITY_NAME":
      return { ...state, cityName: action.payload };
    case "SET_SHOW_WEATHER_DETAILS":
      return { ...state, showWeatherDetails: action.payload };
    case "SET_SHOW_LOADER":
      return { ...state, showLoader: action.payload };
    case "SET_WEATHER_DATA":
      return { ...state, weatherData: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
