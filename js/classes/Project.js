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


    createImage() {

        if (this.image) {

            return `
                <img
                    src="${this.rootPath}/${this.image}"
                    alt="${this.title}"
                    class="project-image"
                >
            `;
        }


        const firstLetter =
            this.title.charAt(0);


        return `
            <div class="project-placeholder">
                ${firstLetter}
            </div>
        `;
    }


    render() {

        return `
            <article class="project-card">

                ${this.createImage()}

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


                    <div class="project-links">

                        <a
                            href="${this.github}"
                            target="_blank"
                            rel="noopener"
                        >
                            GitHub →
                        </a>

                        <a
                            href="${this.live}"
                            target="_blank"
                            rel="noopener"
                        >
                            Live Demo →
                        </a>

                    </div>

                </div>

            </article>
        `;
    }

}