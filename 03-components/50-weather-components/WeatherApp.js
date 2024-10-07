import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherCardList from './components/WeatherCardList.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCardList
  },

  setup() {
    return {
      wData: getWeatherData(),
      icons: WeatherConditionIcons,
    }
  },
  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherCardList :cardsList="wData" :icons="icons"/>
    </div>
  `,
})
