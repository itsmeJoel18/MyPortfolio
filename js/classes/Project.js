export default class Project {

    constructor(project, rootPath = ".") {

        this.id =
            project.id;

        this.title =
            project.title;

        this.description =
            project.description;

        this.technologies =
            project.technologies;

        this.github =
            project.github;

        this.live =
            project.live;

        this.image =
            project.image;

        this.featured =
            project.featured;

        this.features =
            project.features || [];

        this.rootPath =
            rootPath;
    }


    createTechnologyTags() {

        return this.technologies
            .map(
                technology => `
                    <span class="tech-tag">
                        ${technology}
                    </span>
                `
            )
            .join("");
    }


    createMedia() {

        if (this.image) {

            return `
                <div class="project-image">
                    <img
                        src="${this.rootPath}/${this.image}"
                        alt="${this.title}"
                    >
                </div>
            `;
        }


        return `
            <div class="project-icon">
                ${this.title.charAt(0)}
            </div>
        `;
    }


    createFeatures() {

        if (
            !this.features ||
            !this.features.length
        ) {
            return "";
        }


        return `
            <ul class="project-features">

                ${this.features
                    .map(
                        feature => `
                            <li>
                                ${feature}
                            </li>
                        `
                    )
                    .join("")}

            </ul>
        `;
    }


    render() {

        return `
            <article class="project-card">

                ${this.createMedia()}

                <div class="project-content">

                    <h3>
                        ${this.title}
                    </h3>

                    <p>
                        ${this.description}
                    </p>


                    <div class="project-tech">

                        ${this.createTechnologyTags()}

                    </div>

                    ${this.createFeatures()}


                    <div class="project-links">

                    </div>

                </div>

            </article>
        `;
    }

}