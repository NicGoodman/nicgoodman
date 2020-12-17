var Contact = {
    template: "#contact-content",
    data() {
        return {
			formData: {
			name: null,
			email: null,
			phone: null,
			message: null
			},
        }
    },
    methods: {
        encode(data) {  
            const formData = new FormData();
            
            for (const key of Object.keys(data)) {
                formData.append(key, data[key]);
            }
            
            return formData;
        },

        handleFormSubmit(e) {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
            };

            axios.post(
                location.href, 
                this.encode({
                    'form-name': e.target.getAttribute("name"),
                    ...this.formData,
                }),
                axiosConfig
            )
            .then(data => console.log(data))
            .catch(error => console.log(error))
            .then(document.getElementById("contactForm").innerHTML = `
            <div>
                Thank you! I received your submission.
            </div>
            `)
        }
    }
};
