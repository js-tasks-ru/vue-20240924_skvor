import { defineComponent, ref, onMounted, onUnmounted} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const date = ref(new Date());

    const updateDate = () => {
      date.value = new Date(Date.now());
    }

    onMounted(() => {
      setInterval(updateDate, 1000);
    })

    onUnmounted(() => {
      clearInterval(updateDate);
    })

    function getTime() {
      return Intl.DateTimeFormat(navigator.language, { timeStyle: 'medium' }).format(date.value)
    }

    return {
      getTime,
    }
  },

  template: `<div class="clock">{{ getTime() }}</div>`,
})
