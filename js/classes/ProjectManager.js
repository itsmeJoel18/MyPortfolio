import Project from "./Project.js";
import projects from "../data/projects.js";

export default class ProjectManager {
    constructor(containerId) {
        this.container =
            document.getElementById(containerId);
    }

    init() {
        if (!this.container) {
            return;
        }

        this.renderProjects();
    }

    renderProjects() {
        this.container.innerHTML = "";

        projects.forEach(data => {

            const project = new Project(
                data.id,
                data.title,
                data.description,
                data.image,
                data.technologies,
                data.github
            );

            this.container.innerHTML += project.render();
        });
    }
}