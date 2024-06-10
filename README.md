# React + Vite


# Weather Application

## Overview
This Weather Application provides real-time weather information and forecasts for various locations. It utilizes the OpenWeather API to fetch data and displays it in a user-friendly interface. The application is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.

## Tech Stack
- **React JS**: The primary framework used to build the application.
- **JavaScript**: Used for scripting and implementing logic.
- **CSS**: For styling the application.
- **OpenWeather API**: Used to fetch weather data.

## Features Implemented
### Current Location Weather
- **Temperature**: Displays the current temperature.
- **Date and Time**: Shows the current date and local time.

### 7 Days Weather Forecast
- Provides a detailed weather forecast for the next 7 days.

### Dark and Light Theme Mode
- Users can switch between dark and light themes for better visibility and user experience.

### Live Search
- A search feature that allows users to find and view weather information for different locations in real-time.

### Weather Details
- Comprehensive weather details including temperature, humidity, wind speed, and more.

### Responsiveness
- The application is fully responsive and optimized for mobile phones, tablets, and desktop computers.

## Getting Started
1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
    Create a `.env` file in the root directory and add your OpenWeather API key:
    ```
    VITE_API_KEY_APP=your_openweather_api_key
    VITE_BASE_API_URL_APP=https://api.openweathermap.org/data/2.5/
    ```

4. **Run the Application**:
    ```bash
    npm start
    ```

5. **Build for Production**:
    ```bash
    npm run build
    ```

## Usage
- **Current Location**: The application automatically detects and displays weather information for your current location.
- **Search**: Use the search bar to find weather details for any location.
- **Theme Switcher**: Toggle between dark and light themes using the theme switcher button.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and include relevant tests for your changes.

---

For any issues or feature requests, please open an issue on GitHub. Enjoy using the Weather Application!
