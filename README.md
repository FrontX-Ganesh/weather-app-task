In the project directory, you can run:
### `npm start`

Project Name: City Weather App

Description
City Weather App is a simple web application that allows users to search for weather information for a specific city. The app uses Material UI for the user interface components and Material UI Icons for visually appealing icons. It also utilizes a custom Toast message component to display various error messages for city input validation.


Project Name: City Weather App

Description
City Weather App is a simple web application that allows users to search for weather information for a specific city. The app uses Material UI for the user interface components and Material UI Icons for visually appealing icons. It also utilizes a custom Toast message component to display various error messages for city input validation.

Features:
Search for weather information for any city
Display current weather conditions including temperature, humidity, wind speed, and weather description
Show a five-day weather forecast for the selected city
Custom Toast messages for error handling on city input

Installation
Clone the repository from GitHub.
Install the necessary dependencies using `npm install` or `yarn install`.
Start the development server using `npm start` or `yarn start`.

Error Handling
The City Weather App has comprehensive error handling for the city input field. The following errors are covered:

City not found: If the entered city name is not recognized or does not exist, an error message will be displayed using the Toast message.
Empty input: If the user submits an empty city name, a Toast message will remind them to enter a city name.
Network error: In case of network issues or API call failures, an appropriate error message will be shown using the Toast message.

Custom Hook - useToastMessage
The project includes a custom hook called useToastMessage that handles the display of Toast messages. This hook can be reused across the application to show error, success, or informational messages in a consistent manner.

Technologies Used
React.js for building the user interface
Material UI for UI components and styling
Material UI Icons for iconography
OpenWeather API for fetching weather data