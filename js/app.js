import Navbar
    from "./classes/Navbar.js";

import ProjectManager
    from "./classes/ProjectManager.js";

import ContactForm
    from "./classes/ContactForm.js";


class PortfolioApp {

    constructor() {

        this.rootPath =
            document.body.dataset.root
            || ".";


        this.navbar =
            new Navbar();


        this.contactForm =
            new ContactForm(
                "contact-form"
            );


        this.featuredProjects =
            new ProjectManager(
                "featured-project-container",
                {
                    featuredOnly: true,

                    limit: 3,

                    rootPath:
                        this.rootPath
                }
            );


        this.allProjects =
            new ProjectManager(
                "project-container",
                {
                    featuredOnly: false,

                    rootPath:
                        this.rootPath
                }
            );

    }


    setCurrentYear() {

        const year =
            document.getElementById(
                "current-year"
            );


        if (year) {

            year.textContent =
                new Date().getFullYear();

        }

    }


    init() {

        console.log(
            "Portfolio application initialized."
        );


        this.navbar.init();


        this.featuredProjects.init();


        this.allProjects.init();


        this.contactForm.init();


        this.setCurrentYear();

    }

}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const app =
            new PortfolioApp();


        app.init();

    }
);