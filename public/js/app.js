const app = Vue.createApp({
  data() {
    return {
      navLink: 1
    }
  },
  methods: {
    selected(num) {
      this.navLink = num;
    }
  }
});
app.mount('#nicgoodman-site');