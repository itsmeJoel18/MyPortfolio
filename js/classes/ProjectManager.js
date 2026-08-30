import Project from "./Project.js";
import projects from "../data/projects.js";

export default class ProjectManager {

    constructor(containerId, config = {}) {

        this.container =
            document.getElementById(
                containerId
            );

        this.featuredOnly =
            config.featuredOnly || false;

        this.limit =
            config.limit || null;

        this.rootPath =
            config.rootPath || ".";
    }


    init() {

        if (!this.container) {
            return;
        }

        this.renderProjects();
    }


    getProjects() {

        let list = projects;

        if (this.featuredOnly) {

            list = list.filter(
                project => project.featured
            );
        }

        if (this.limit) {

            list = list.slice(
                0,
                this.limit
            );
        }

        return list;
    }


    renderProjects() {

        this.container.innerHTML = "";

        this.getProjects().forEach(data => {

            const project =
                new Project(
                    data,
                    this.rootPath
                );

            this.container.innerHTML += project.render();
        });
    }

}