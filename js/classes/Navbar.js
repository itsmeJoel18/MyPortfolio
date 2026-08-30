export default class Navbar {

    constructor() {

        this.toggle =
            document.getElementById(
                "nav-toggle"
            );


        this.menu =
            document.getElementById(
                "nav-menu"
            );


        this.links =
            document.querySelectorAll(
                ".nav-link"
            );
    }


    toggleMenu() {

        if (!this.menu) {
            return;
        }


        this.menu.classList.toggle(
            "open"
        );


        if (this.toggle) {

            this.toggle.textContent =
                this.menu.classList.contains(
                    "open"
                )
                    ? "✕"
                    : "☰";
        }
    }


    closeMenu() {

        if (!this.menu) {
            return;
        }


        this.menu.classList.remove(
            "open"
        );


        if (this.toggle) {

            this.toggle.textContent =
                "☰";
        }
    }


    setActivePage() {

        const pathname =
            window.location.pathname;


        let currentPage =
            "home";


        if (
            pathname.includes(
                "about.html"
            )
        ) {

            currentPage =
                "about";

        } else if (
            pathname.includes(
                "project.html"
            )
        ) {

            currentPage =
                "project";

        } else if (
            pathname.includes(
                "education.html"
            )
        ) {

            currentPage =
                "education";

        } else if (
            pathname.includes(
                "contact.html"
            )
        ) {

            currentPage =
                "contact";
        }


        this.links.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.dataset.page ===
                currentPage
            ) {

                link.classList.add(
                    "active"
                );
            }

        });

    }


    addEvents() {

        if (this.toggle) {

            this.toggle.addEventListener(
                "click",
                () => this.toggleMenu()
            );
        }


        this.links.forEach(link => {

            link.addEventListener(
                "click",
                () => this.closeMenu()
            );

        });

    }


    init() {

        this.setActivePage();

        this.addEvents();

    }

}