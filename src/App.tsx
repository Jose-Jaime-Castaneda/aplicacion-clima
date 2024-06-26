import styles from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/Form/Form"
import Spinners from "./components/Spinner/Spinners"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, isLoading, notFound, fetchWeather, hasWeatherData } = useWeather()
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

        {hasWeatherData && (
          <WeatherDetail
            weather={weather}
          />
        )}

        {notFound && (
          <Alert>
            Cuidad No Encontrada
          </Alert>
        )}
      </div>
    </>
  )
}

export default App
