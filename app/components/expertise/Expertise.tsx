"use client"
///Expertise component

///Libraries -->
import styles from "./expertise.module.scss"
import { useRouter } from 'next/navigation';
import { IExpertise } from "@/app/utils/interfaces";
import { useState } from "react";

///Commencing the code 

/**
 * @title Expertise Component
 * @returns The Expertise component
 */
const Expertise = ({ expertise_ }: { expertise_: Array<IExpertise> }) => {
    const router = useRouter()
    const [expertises, setExpertises] = useState<Array<IExpertise>>(expertise_)
  //console.log('Current page:', routerPath);

  return (
    <div className={`${styles.main}`} id="expertise">
        <div className={styles.container}>
            <span className={styles.span1}>Skills I&apos;m familiar with</span>
            <h3>My Expertise Area</h3>
            <div className={styles.skills}>
                {expertises ? expertises.map((expertise, id) => (
                    <div key={id} className={styles.carousel}>
                        <div className={styles.illustrate}>
                            <div className={styles.image}>
                                <img 
                                    src={expertise.image}
                                    alt=""
                                />
                            </div>
                            <div className={styles.name}>{expertise.name}</div>
                        </div>
                        <div className={styles.brief}>
                            <div className={styles.percentBar}>
                                <div className={styles.bar} style={{ width: `${expertise.percent}%`}}></div>
                            </div>
                        <div className={styles.percentValue}>{expertise.percent}%</div>
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

export default Expertise;