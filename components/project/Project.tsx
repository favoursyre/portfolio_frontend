"use client"
///Project component

///Libraries -->
import styles from "./project.module.scss"
import { useState } from "react";
import { categoryList, getItemsByKey, shuffleArray } from "@/config/utils"
import { projects } from "@/config/database";

///Commencing the code 

/**
 * @title Project Component
 * @returns The Project component
 */
const Project = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Web 2")
  //console.log('Current page:', routerPath);

  return (
    <div className={`${styles.main}`} id="project">
        <div className={styles.container}>
            <span className={styles.span1}>Some of the stuffs I&apos;ve built</span>
            <h3>My Projects</h3>
            <div className={styles.category}>
                {categoryList.map((category, id) => (
                    <button key={id} onClick={() => setActiveCategory(() => category)} className={activeCategory === category ? styles.activeCategory : ""}><span>{category}</span></button>
                ))}
            </div>
            <div className={styles.projects}>
            {projects ? getItemsByKey(shuffleArray(projects), "category", activeCategory).map((project, pid) => (
                <div className={styles.carousel} key={pid}>
                <div className={styles.image}>
                    <img 
                        src={project.image}
                        alt=""
                    />
                    <div className={styles.options}>
                        <button className={styles.btn1} onClick={() => window.open(project.sourceCodeLink, "_blank")}><span>View Source Code</span></button>
                        {project.appLink ? (<button className={styles.btn2} onClick={() => window.open(project.appLink, "_blank")}><span>View Application</span></button>) : (<></>)}
                    </div>
                </div>
                <div className={styles.brief}>
                    <div className={styles.brief1}>{project.name}</div>
                    <div className={styles.brief2Option}><span>{project.technologies.join(", ")}</span></div>
                    <div className={styles.brief2}><span>{project.description}</span></div>
                </div>
            </div>
            )) : (
                <></>
            )}
                
            </div>
        </div>
    </div>
  );
};

export default Project;