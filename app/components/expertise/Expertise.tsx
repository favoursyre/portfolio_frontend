"use client"
///Expertise component

///Libraries -->
import styles from "./expertise.module.scss"
import { useRouter } from 'next/navigation';
import { aclonica, inter } from '@/app/utils/utils';

///Commencing the code 

/**
 * @title Expertise Component
 * @returns The Expertise component
 */
const Expertise = () => {
    const router = useRouter()
  //console.log('Current page:', routerPath);

  return (
    <div className={`${styles.main} ${inter.className}`} id="expertise">
        <div className={styles.container}>
            <span className={styles.span1}>Technologies I'm familiar with</span>
            <h3 className={aclonica.className}>My Expertise Area</h3>
            <div className={styles.skills}>
                <div className={styles.carousel}>
                    <div className={styles.illustrate}>
                        <div className={styles.image}></div>
                        <div className={styles.name}>Python</div>
                    </div>
                    <div className={styles.brief}>
                        <div className={styles.percentBar}>
                            <div className={styles.bar}></div>
                        </div>
                        <div className={styles.percentValue}>50%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Expertise;