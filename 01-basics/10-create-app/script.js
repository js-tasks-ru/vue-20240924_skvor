import { defineComponent, createApp } from 'vue'

const options = {
  dateStyle:'long'
};
createApp({
  name: 'todayDate',
  template: 'Сегодня ' + new Date().toLocaleDateString(navigator.language, options),
}).mount('#app')
