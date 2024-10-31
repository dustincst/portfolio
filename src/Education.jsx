import educations from "./educations.json";

import styles from "./Education.module.css";

import { getImageUrl } from "./utils";

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <ul className={styles.educations}>
                    {educations.map((education, id) => {
                        return (
                            <li key={id} className={styles.educationImageContainer}>
                                <img
                                    src={getImageUrl(education.imageSrc)}
                                    alt={education.title}
                                ></img>
                                <div>
                                    <h3>{education.course}</h3>
                                    <p>{education.school}</p>
                                    <p>{education.date}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
