export default class Education {

    constructor(education, rootPath = ".") {

        this.id =
            education.id;

        this.school =
            education.school;

        this.degree =
            education.degree;

        this.years =
            education.years;

        this.location =
            education.location;

        this.description =
            education.description;

        this.image =
            education.image;

        this.rootPath =
            rootPath;
    }


    createLogo() {

        if (this.image) {

            return `
                <img
                    src="C:\Users\Acer\Downloads\porfolio\assets\images\DSSC LOGO.png"
                    alt="${this.school} logo"
                    class="education-logo"
                >
            `;
        }


        const firstLetter =
            this.school.charAt(0);


        return `
            <span class="education-ring">
                ${firstLetter}
            </span>
        `;
    }


    createDegree() {

        if (!this.degree) {
            return "";
        }

        return `
            <p class="education-degree">
                ${this.degree}
            </p>
        `;
    }


    render() {

        return `
            <article class="education-card">

                <div class="education-header">

                    ${this.createLogo()}

                    <div class="education-info">

                        <h3>
                            ${this.school}
                        </h3>

                        ${this.createDegree()}

                    </div>

                    <span class="education-years">
                        ${this.years}
                    </span>

                </div>

                <p class="education-location">
                    ${this.location}
                </p>

                <p class="education-description">
                    ${this.description}
                </p>

            </article>
        `;
    }

}