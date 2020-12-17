var Contact = {
    template: "#contact-content",
    data() {
        return {
        };
    },
    methods: {
        processForm() {
                let myForm = document.getElementById("contactForm");
                let formData = new FormData(myForm);
                fetch("/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams(formData).toString()
                })
                    .then(() => console.log("Form successfully submitted"))
                    .catch(error => alert(error));
            }
    }
};
