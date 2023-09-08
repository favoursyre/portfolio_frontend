"use client"
///Hero component

///Libraries -->
import styles from "./hero.module.scss"
import { useRouter } from 'next/navigation';
import CodeIcon from '@mui/icons-material/Code';
import GradingIcon from '@mui/icons-material/Grading';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { MouseEvent } from "react";

///Commencing the code 

/**
 * @title Hero Component
 * @returns The Hero component
 */
const Hero = () => {
    const router = useRouter()
  //console.log('Current page:', routerPath);

  const downloadCV = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()

    window.open("https://drive.google.com/uc?export=download&id=1juzM2lkt5Hel9YlqrHjIRqbFYJjjNfwG", "_blank")
  }

  return (
    <>
        <div className={`${styles.main}`}>
            <div className={styles.image}>
                <div className={styles.imageFrame}>
                    <img
                        src="https://drive.google.com/uc?export=download&id=1m394hmoLMu4vjOQCtjxV01Jv_0ZWrwDh"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.brief}>
                <span className={styles.brief1}>Software Engineer</span>
                <span className={`${styles.brief2}`}>
                    Favour Ndubuisi
                </span>
                <span className={styles.brief3}>
                With a keen eye for innovation, I specialize in developing dynamic web applications and leveraging the transformative potential of blockchain technology. From elegant front-end designs to robust back-end architectures, I bring ideas to life with meticulous attention to detail and a commitment to excellence.
                </span>
                <div className={`${styles.buttons}`}>
                    <button className={styles.btn1} onClick={(e) => downloadCV(e)}>
                        <span>Download CV</span>
                    </button>
                    <button className={styles.btn2} onClick={() => router.push('/#about')} >
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
            <img id={styles.dot_1} src="https://drive.google.com/uc?export=download&id=1Co5DsLhkA52JBu_NwskFl7k4PQApi17U" alt=""></img>
            <img id={styles.dot_2} src="https://drive.google.com/uc?export=download&id=1ljsS_8gYNUTimLwbicugEynPvPSJwZT4" alt=""></img>
        </div>
        <div className={`${styles.stats}`}>
            <div className={styles.container}>
                <div className={styles.experience}>
                    <div className={styles.icon}>
                        <CodeIcon className={styles.iconTag} />
                    </div>
                    <div className={styles.label}>
                        <span className={styles.span1}>5+ Years Work</span>
                        <span className={styles.span2}>Experience</span>
                    </div>
                </div>
                <div className={styles.projects}>
                <div className={styles.icon}>
                        <GradingIcon className={styles.iconTag} />
                    </div>
                    <div className={styles.label}>
                        <span className={styles.span1}>127+ Projects</span>
                        <span className={styles.span2}>Completed</span>
                    </div>
                </div>
                <div className={styles.clients}>
                <div className={styles.icon}>
                        <InsertEmoticonIcon className={styles.iconTag} />
                    </div>
                    <div className={styles.label}>
                        <span className={styles.span1}>118+ Satisfied</span>
                        <span className={styles.span2}>Clients</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  );
};

export default Hero;