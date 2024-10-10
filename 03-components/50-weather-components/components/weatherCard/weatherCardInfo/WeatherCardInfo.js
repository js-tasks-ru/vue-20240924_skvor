import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCardInfo',

  props: {
    cardInfo: {
      type: Object,
      required: true,
    }
  },

  template: `
    <div>
       <h2 class="weather-card__name">
         {{ cardInfo.geographic_name }}
       </h2>
       <div class="weather-card__time">
         {{ cardInfo.current.dt }}
       </div>
    </div>
  `,
})
