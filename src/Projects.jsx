import React from "react";

import styles from "./Projects.module.css";

import projects from "./projects.json";

import { getImageUrl } from "./utils";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (
                        <div className={styles.cardContainer} key={id}>
                            <img
                                className={styles.cardImage}
                                src={getImageUrl(project.imageSrc)}
                                alt={`Image of ${project.title}`}
                            ></img>
                            <h3 className={styles.cardTitle}>
                                {project.title}
                            </h3>
                            <p className={styles.cardDescription}>
                                {project.description}
                            </p>
                            <ul className={styles.cardSkills}>
                                {project.skills.map((skill, id) => {
                                    return (
                                        <li
                                            className={styles.cardSkill}
                                            key={id}
                                        >
                                            {skill}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className={styles.cardLinks}>
                                <a
                                    className={styles.cardLink}
                                    href={project.domo}
                                >
                                    Demo
                                </a>
                                <a
                                    className={styles.cardLink}
                                    href={project.source}
                                >
                                    Source
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
