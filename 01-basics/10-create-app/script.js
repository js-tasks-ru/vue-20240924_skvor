import { defineComponent, createApp } from 'vue'



const TodayDateApp = defineComponent({
  name: 'TodayDateApp',

  setup() {
    const options = {
      dateStyle:'long'
    };
    const todayDate = 'Сегодня ' + new Date().toLocaleDateString(navigator.language, options)

    return { todayDate, };
  },

  template: `
     <div>{{ todayDate }}</div>
  `,
})

createApp(TodayDateApp).mount('#app')
