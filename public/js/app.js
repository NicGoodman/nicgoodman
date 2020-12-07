const app = Vue.createApp({});
app.component('project-title', {
  data() {
    return {
      json: {}
    }
  },
  methods: {
    setJson (payload) {
      this.json = payload;
    }
  },
  template: `<p>{{ json.title }}</p>`
});
app.mount('#projects');