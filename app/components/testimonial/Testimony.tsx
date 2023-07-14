"use client"
///Testimony component

///Libraries -->
import styles from "./testimony.module.scss"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { aclonica, poppins, inter, getItem, hireModalKey, setItem } from '@/app/utils/utils';

///Commencing the code 

/**
 * @title Testimony Component
 * @returns The Testimony component
 */
const Testimony = () => {
    const router = useRouter()
    const hireModalStat = getItem(hireModalKey)
    console.log("test: ", hireModalStat)
    const [hireModal, setHireModal] = useState<Boolean | null>(hireModalStat ? hireModalStat : null)
  //console.log('Current page:', routerPath);

  return (
    <div className={`${styles.main} ${inter.className}`} id="testimony">
        <span className={styles.span1}>What some of my clients have said</span>
        <h3 className={aclonica.className}>Testimonials</h3>
        <div className={styles.testimony}>
            <div className={styles.image}>
                <img />
            </div>
            <div className={styles.brief}>
                <div className={styles.brief1}>
                    <div className={styles.name}>
                        <span className={styles.name1}>Syre Musk</span>
                        <span className={styles.name2}>Client</span>
                    </div>
                    <div className={styles.stars}></div>
                </div>
                <span className={styles.brief2}>He is a diligent software engineer, he delivered his quota on time</span>
            </div>
        </div>
        <img id={styles.dot_1} src="./images/dots.png" alt=""></img>
        <img id={styles.dot_2} src="./images/dots1.png" alt=""></img>
    </div>
  );
};

export default Testimony;