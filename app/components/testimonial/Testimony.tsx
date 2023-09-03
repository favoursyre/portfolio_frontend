"use client"
///Testimony component

///Libraries -->
import styles from "./testimony.module.scss"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { hireModalKey } from '@/app/utils/utils';
import { ITestimony  } from "@/app/utils/interfaces";
import StarIcon from '@mui/icons-material/Star';

///Commencing the code 

/**
 * @title Testimony Component
 * @returns The Testimony component
 */
const Testimony = ({ testimonial_ }: { testimonial_: Array<ITestimony> }) => {
    const router = useRouter()
    const stars = [1, 2, 3, 4, 5];
    //const hireModalStat = getItem(hireModalKey)
    const [activeTestifier, setActiveTestifier] = useState<number>(0)
    const [testimony, setTestimony] = useState<Array<ITestimony>>(testimonial_)
    const [activeTestimony, setActiveTestimony] = useState<ITestimony | undefined>(testimony ? testimony[activeTestifier] : undefined)
    //console.log("test: ", hireModalStat)
    //const [hireModal, setHireModal] = useState<Boolean | null>(hireModalStat ? hireModalStat : null)
  //console.log('Current page:', routerPath);

   ///This handles the changing of the testifiers and their testimony
   useEffect(() => {
    const interval = setInterval(() => {
        const isLastSlide = activeTestifier === testimony.length - 1;
        const newIndex = isLastSlide ? 0 : activeTestifier + 1;
        setActiveTestifier(() => newIndex)
        //setActiveTestimony(() => testimony[activeTestifier])
        console.log("Active identifier: ", activeTestifier)
      }, 9000);
  
      return () => {
        clearInterval(interval);
      };
    
  }, [activeTestifier, activeTestimony, testimony]);

  return (
    <div className={`${styles.main}`} id="testimony">
        <span className={styles.span1}>What some of my clients have said</span>
        <h3>Testimonials</h3>
        <div className={styles.testimony}>
            <div className={styles.image}>
                <img 
                    src={testimony ? testimony[activeTestifier].image : ""}
                    alt=""
                />
            </div>
            <div className={styles.brief}>
                <div className={styles.brief1}>
                    <div className={styles.name}>
                        <span className={styles.name1}>{testimony ? testimony[activeTestifier].name : ""}</span>
                        <span className={styles.name2}>Client</span>
                    </div>
                    <div className={styles.stars}>
                        {stars.map((star) => (
                            <StarIcon
                                key={star}
                                className={`${styles.icon}`}
                            />
                        ))}
                    </div>
                </div>
                <span className={styles.brief2}>{testimony ? testimony[activeTestifier].testimony : ""}</span>
            </div>
        </div>
        <img id={styles.dot_1} src="https://drive.google.com/uc?export=download&id=1Co5DsLhkA52JBu_NwskFl7k4PQApi17U" alt=""></img>
        <img id={styles.dot_2} src="https://drive.google.com/uc?export=download&id=1ljsS_8gYNUTimLwbicugEynPvPSJwZT4" alt=""></img>
    </div>
  );
};

export default Testimony;