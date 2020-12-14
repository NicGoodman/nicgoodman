var Home = {
    template: '#work-content',
    data() {
        return {
            coderAnimation: false,
            designerAnimation: false
        };
    },
    computed: {},
    methods: {
        toggleCoderAnimation() {
            this.coderAnimation = !this.coderAnimation;
        },
        toggleDesignerAnimation() {
            this.designerAnimation = !this.designerAnimation;
        }
    }
};