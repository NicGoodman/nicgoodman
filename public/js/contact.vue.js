var Contact = {
    template: "#contact-content",
    data() {
        return {
			formData: {
			name: null,
			email: null,
			phone: null,
			message: null,
			navLink: 3
			},
        }
    },
    methods: {
		selected(num) {
            this.navLink = num;
        },
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
            <h3 class="text-pink-600 bg-green-100 font-script font-extrabold pr-10 pl-2 py-1 self-start mb-4 text-base md:text-xl lg:text-2xl">
                Thank you, I received your email!
            </h3>
            `)
        }
    }
};
