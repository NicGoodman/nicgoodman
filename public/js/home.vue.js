var Home = {
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
    },
	template: "#work-content"
};