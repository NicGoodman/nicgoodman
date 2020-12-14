var Home = {
    template: '#work-content',
    data() {
        return {
            coderAnimation: false,
            designerAnimation: false,
            projectFilter: 'all',
            showProject: false,
            projectContent: ''
        };
    },
    computed: {},
    methods: {
        toggleCoderAnimation() {
            this.coderAnimation = !this.coderAnimation;
        },
        toggleDesignerAnimation() {
            this.designerAnimation = !this.designerAnimation;
        },
        setProjectFilter(filter) {
            this.projectFilter = filter;
        },
        async fetchProject(url) {
           await fetch(url)
            .then(response => response.text())
            .then(data => (this.projectContent = data));
            this.showProject = true;
        },
        toggleProject() {
            this.showProject = !this.showProject;
        }
    }
};