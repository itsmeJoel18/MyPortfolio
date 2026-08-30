import Education from "./Education.js";
import education from "../data/education.js";

export default class EducationManager {

    constructor(containerId, config = {}) {

        this.container =
            document.getElementById(
                containerId
            );

        this.rootPath =
            config.rootPath || ".";
    }


    init() {

        if (!this.container) {
            return;
        }

        this.renderEducation();
    }


    renderEducation() {

        this.container.innerHTML = "";

        education.forEach(data => {

            const item =
                new Education(
                    data,
                    this.rootPath
                );

            this.container.innerHTML += item.render();
        });
    }

}