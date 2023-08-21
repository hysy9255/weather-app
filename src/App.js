import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherButton from "./component/WeatherButton";

// 1. 앱이 실해되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨 샅애
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른도시)
// 4. 도시 버튼을 클릭 할때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=be2ac40c9ad698df4d986ade1be518b0&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be2ac40c9ad698df4d986ade1be518b0&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // useEffect(() => {
  //   console.log("city?", city);
  //   getWeatherByCity();
  // }, [city]);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
