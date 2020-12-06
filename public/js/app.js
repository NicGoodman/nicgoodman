const app = Vue.createApp({});
app.component('hello-world', {
  data() {
    return {
    }
  },
  props: ['content'],
  template: `<p>{{content}}</p>`
});
app.mount('#content');