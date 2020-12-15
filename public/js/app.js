const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact }
];

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
  });
const app = Vue.createApp({
    data() {
        return {
            navLink: 1
        };
    },
    computed: {},
    methods: {
        selected(num) {
            this.navLink = num;
        }
    }
});
app.use(router);
app.mount("#nicgoodman-site");

document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('contactForm');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}