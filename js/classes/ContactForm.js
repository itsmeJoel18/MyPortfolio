export default class ContactForm {

    constructor(formId) {

        this.form =
            document.getElementById(
                formId
            );


        this.message =
            document.getElementById(
                "form-message"
            );
    }


    getFormData() {

        return {

            name:
                this.form.name.value.trim(),

            email:
                this.form.email.value.trim(),

            message:
                this.form.message.value.trim()
        };

    }


    validate(data) {

        if (
            !data.name ||
            !data.email ||
            !data.message
        ) {

            return {
                valid: false,
                message:
                    "Please complete all fields."
            };

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                data.email
            )
        ) {

            return {
                valid: false,
                message:
                    "Please enter a valid email address."
            };

        }


        return {
            valid: true,
            message:
                "Your message has been received."
        };

    }


    showMessage(
        text,
        success = true
    ) {

        if (!this.message) {
            return;
        }


        this.message.textContent =
            text;


        this.message.style.color =
            success
                ? "#22d3ee"
                : "#fb7185";
    }


    submit(event) {

        event.preventDefault();


        const data =
            this.getFormData();


        const validation =
            this.validate(data);


        if (!validation.valid) {

            this.showMessage(
                validation.message,
                false
            );

            return;
        }


        /*
         * This currently demonstrates
         * front-end validation only.
         *
         * Later you can connect this
         * to Formspree, EmailJS,
         * Laravel, Supabase, etc.
         */


        console.log(
            "Contact form data:",
            data
        );


        this.showMessage(
            "Message submitted successfully!",
            true
        );


        this.form.reset();

    }


    init() {

        if (!this.form) {
            return;
        }


        this.form.addEventListener(
            "submit",
            event =>
                this.submit(event)
        );

    }

}