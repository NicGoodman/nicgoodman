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