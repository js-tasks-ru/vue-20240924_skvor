import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCondition',

  props: {
    condition: {
      type: Object,
      required: true,
    },
    icons: {
      type: Object,
      required: true,
    }
  },

  setup() {
    function getTemperatureValue(temp) {
      return (temp-273.15).toFixed(1);
    }

    return {
      getTemperatureValue,
    }
  },

  template: `
    <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="condition.weather.description">{{ icons[condition.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ getTemperatureValue(condition.temp) }} °C</div>
    </div>
  `,
})
