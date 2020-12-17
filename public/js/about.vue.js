var About = {
	template: "#about-content",
	data() {
        return {
            navLink: 2
        };
    },
	methods: {
		selected(num) {
            this.navLink = num;
        }
	}
};