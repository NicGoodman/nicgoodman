const app = Vue.createApp({
    data() {
        return {
            active:false,
            navLink: 1
        }
    },
    computed: {
        selected(num) {
            this.navLink = num;
        }
    },
    methods: {
      toggleCoderAnimation() {
        this.active = !this.active;
      }
    }
});
app.mount("#nicgoodman-site");
