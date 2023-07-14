"use client"
///Project component

///Libraries -->
import styles from "./project.module.scss"
import { useRouter } from 'next/navigation';
import CodeIcon from '@mui/icons-material/Code';
import GradingIcon from '@mui/icons-material/Grading';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

///Commencing the code 

/**
 * @title Project Component
 * @returns The Project component
 */
const Project = () => {
    const router = useRouter()
  //console.log('Current page:', routerPath);

  return (
    <div className={`${styles.main}`} id="project">
        <div className={styles.container}>
            <span className={styles.span1}>Some of the stuffs I've built</span>
            <h3>My Projects</h3>
            <div className={styles.category}>
                <button><span>Web 2</span></button>
                <button><span>Blockchain</span></button>
                <button><span>Cyber Security</span></button>
                <button><span>AI/ML</span></button>
            </div>
            <div className={styles.projects}>
                <div className={styles.carousel}>
                    <div className={styles.image}>
                        <img />
                        <div className={styles.options}>
                            <button className={styles.btn1}><span>View Source Code</span></button>
                            <button className={styles.btn2}><span>View Application</span></button>
                        </div>
                    </div>
                    <div className={styles.brief}>
                        <div className={styles.brief1}>Dr Ritany Inc</div>
                        <div className={styles.brief2Option}><span>SASS, NextJS, ExpressJS, NodeJS, Typescript, MongoDB</span></div>
                        <div className={styles.brief2}><span>This is a platform that allows users to buy health products</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Project;