"use client"
///About component

///Libraries -->
import Link from 'next/link';
import { useState, useEffect, MouseEvent, FormEvent } from 'react';
import styles from "./about.module.scss"
import { usePathname, useRouter } from 'next/navigation';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonIcon from '@mui/icons-material/Person';
import MaleIcon from '@mui/icons-material/Male';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FlightIcon from '@mui/icons-material/Flight';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FlagIcon from '@mui/icons-material/Flag';
import CodeIcon from '@mui/icons-material/Code';
//import ReactDOMServer from 'react-dom/server';

///Commencing the code 


/**
 * @title About Component
 * @returns The About component
 */
const About = () => {
    const router = useRouter()
  //console.log('Current page:', routerPath);
  //const htmlString = ReactDOMServer.renderToStaticMarkup(<Hero />);
  //console.log('Testimony: ', htmlString)

  return (
    <div className={`${styles.main}`} id="about">
        <div className={styles.left}>
            <div className={styles.span1}>A brief introduction</div>
            <h3>About Me</h3>
           <span className={styles.span2}>I&apos;m a Full Stack Engineer with 3+ years&apos; worth of experience facilitating engineering solutions and creating
            value with a wide range of skills. I have proficient knowledge in Web Engineering, Blockchain Engineering
            and Cyber Security. I enjoy building software and solving real world problems. <br />
            With my strong technical skills, passion for innovation and proven track record, I am confident in my ability to contribute significantly to software projects, drive success and exceed client expectations. </span>
        </div>
        <div className={styles.right}>
            <div className={styles.bio}>
                <h5>Biodata</h5>
                <div className={styles.biodatas}>
                    <div className={styles.name}>
                        <div className={styles.label}>
                            <AccountCircleIcon className={styles.icon} />
                            <span>Name: </span>
                        </div>
                        <span className={styles.bioInfo}>Ndubuisi Favour</span>
                    </div>
                    <div className={styles.age}>
                        <div className={styles.label}>
                            <PersonIcon className={styles.icon} />
                            <span>Date of Birth: </span>
                        </div>
                        <span className={styles.bioInfo}>26th April, 1999</span>
                    </div>
                    <div className={styles.gender}>
                        <div className={styles.label}>
                            <MaleIcon className={styles.icon} />
                            <span>Gender: </span>
                        </div>
                        <span className={styles.bioInfo}>Male</span>
                    </div>
                    <div className={styles.nation}>
                        <div className={styles.label}>
                            <FlagIcon className={styles.icon} />
                            <span>Nationality: </span>
                        </div>
                        <span className={styles.bioInfo}>Nigerian</span>
                    </div>
                </div>
            </div>
            <div className={styles.hobby}>
                <h5>Hobbies</h5>
                <div className={styles.hobbies}>
                    <div className={styles.code}>
                        <CodeIcon className={styles.icon} />
                        <span>Coding</span>
                    </div>
                    <div className={styles.music}>
                        <MusicNoteIcon className={styles.icon} />
                        <span>Music</span>
                    </div>
                    <div className={styles.travel}>
                        <TravelExploreIcon className={styles.icon} />
                        <span>Exploring</span>
                    </div>
                    <div className={styles.reading}>
                        <AutoStoriesIcon className={styles.icon} />
                        <span>Reading</span>
                    </div>
                    <div className={styles.sleep}>
                        <HotelIcon className={styles.icon} />
                        <span>Sleeping</span>
                    </div>
                    <div className={styles.food}>
                        <RestaurantMenuIcon className={styles.icon} />
                        <span>Eating</span>
                    </div>
                </div>
            </div>
            <div className={styles.language}>
                <h5>Languages</h5>
                <div className={styles.languages}>
                    <div className={styles.igbo}>
                        <div className={styles.circle_border}>
                            <div className={styles.circle}>
                                <span className={styles.percent}>100%</span>
                            </div>
                        </div>
                        <span className={styles.title}>Igbo</span>
                    </div>
                    <div className={styles.english}>
                    <div className={styles.circle_border}>
                            <div className={styles.circle}>
                                <span className={styles.percent}>100%</span>
                            </div>
                        </div>
                        <span className={styles.title}>English</span>
                    </div>
                    <div className={styles.chinese}>
                    <div className={styles.circle_border}>
                            <div className={styles.circle}>
                                <span className={styles.percent}>18%</span>
                            </div>
                        </div>
                        <span className={styles.title}>Chinese</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;