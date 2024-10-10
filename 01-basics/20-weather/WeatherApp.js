import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'


export default defineComponent({
  name: 'WeatherApp',
  setup() {
    const wData = getWeatherData();

    function getTemperatureInCelcius(temp) {
      return (temp-273.15).toFixed(1);
    }

    function getPressureInMMHg(pressure){
      return (pressure * 0.75).toFixed(0);
    }

    function isNight(time, sunriseTime, sunsetTime) {
      return time < sunriseTime || time > sunsetTime;
    }

    return {
      wData: wData,
      isNight,
      getTemperatureInCelcius,
      getPressureInMMHg,
      icons: WeatherConditionIcons,
    }
  },
  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li class="weather-card" :class="{'weather-card--night': isNight(item.current.dt, item.current.sunrise, item.current.sunset)}" v-for="item in wData">
          <div v-if="item.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ item.alert.sender_name }}: {{ item.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ item.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ item.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="item.current.weather.description">{{ icons[item.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ getTemperatureInCelcius(item.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ getPressureInMMHg(item.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ item.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ item.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ item.current.wind_speed }}</div>
            </div>
          </div>
        </li>
        <br>
      </ul>
    </div>
  `,
})
