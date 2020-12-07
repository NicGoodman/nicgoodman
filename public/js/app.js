const app = Vue.createApp({});
app.component('project-title', {
  data() {
    return {
    }
  },
  props: ['content'],
  template: `<p>{{content}}</p>`
});
app.mount('#projects');