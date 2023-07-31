import React, { useReducer } from "react";
import "../css/Weather.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useToastMessage from "../customHook/useToastMessage";
import CircularProgress from "@mui/material/CircularProgress";
import ShowDetails from "./ShowDetails";
import axios from "axios";
import weatherReducer from "../reducer/WeatherReducer";

const WeatherPage = () => {
  const initialState = {
    cityName: "",
    showWeatherDetails: false,
    showLoader: false,
    weatherData: {},
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const { cityName, showWeatherDetails, showLoader, weatherData } = state;

  const { showToast, ToastContainer } = useToastMessage();

  const getWeatherData = (e) => {
    dispatch({ type: "SET_SHOW_WEATHER_DETAILS", payload: false });
    e.preventDefault();
    if (cityName === "") {
      showToast("City name is mandatory.", "warning");
    } else {
      dispatch({ type: "SET_SHOW_LOADER", payload: true });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7b9a283b3d059435e1eb181876f7fd96`
        )
        .then((response) => {
          dispatch({ type: "SET_SHOW_LOADER", payload: false });
          dispatch({ type: "SET_WEATHER_DATA", payload: response });
          dispatch({ type: "SET_SHOW_WEATHER_DETAILS", payload: true });
          dispatch({ type: "SET_CITY_NAME", payload: "" });
        })
        .catch((error) => {
          dispatch({ type: "SET_SHOW_LOADER", payload: false });
          if (error.response.data.cod === "404") {
            showToast(error.response.data.message, "warning");
          }
          dispatch({ type: "SET_SHOW_WEATHER_DETAILS", payload: false });
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="box">
        <form onSubmit={getWeatherData}>
          <Stack spacing={2}>
            <TextField
              id="city-name"
              label="Enter city"
              variant="outlined"
              value={cityName}
              onChange={(e) =>
                dispatch({ type: "SET_CITY_NAME", payload: e.target.value })
              }
            />
            <Button type="submit" variant="contained">
              check weather
            </Button>
          </Stack>
        </form>
        {showLoader && <CircularProgress />}
        {showWeatherDetails && <ShowDetails data={weatherData} />}
      </div>
    </>
  );
};

export default WeatherPage;
