import styles from "./App.module.css"
import Form from "./components/Form/Form"
import Spinners from "./components/Spinner/Spinners"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, isLoading, fetchWeather, hasWeatherData } = useWeather()
  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        {isLoading && (
          <Spinners />
        )}

        {hasWeatherData && !isLoading && (
          <WeatherDetail
            weather={weather}
          />
        )}
      </div>
    </>
  )
}

export default App
