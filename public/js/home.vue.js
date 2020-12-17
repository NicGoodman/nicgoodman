var Home = {
    template: "#work-content",
    data() {
        return {
            coderAnimation: false,
            designerAnimation: false,
            projectFilter: "all",
            showProject: false,
            projectContent: "",
            showClass: 'opacity-100 max-h-full visible max-w-full m-6 md:m-8',
            hideClass: 'opacity-0 max-h-0 invisible max-w-0 m-0 overflow-hidden',
            navLink: 1
        };
    },
    computed: {},
    methods: {
        selected(num) {
            this.navLink = num;
        },
        toggleCoderAnimation() {
            this.coderAnimation = !this.coderAnimation;
        },
        toggleDesignerAnimation() {
            this.designerAnimation = !this.designerAnimation;
        },
        setProjectFilter(filter) {
            if (this.projectFilter === filter) {
                this.projectFilter = "all";
            } else {
                this.projectFilter = filter;
            }
        },
        async fetchProject(url) {
            await fetch(url)
                .then(response => response.text())
                .then(data => (this.projectContent = data));
            this.showProject = true;
        },
        toggleProject() {
            this.showProject = !this.showProject;
        },
        filterProjects(type) {
            if ( this.projectFilter === type || type === 'all' || this.projectFilter === 'all' ) {
                return this.showClass;
            } else {
                return this.hideClass;
            }
        }
    }
};
