"use client"
///Hire component

///Libraries -->
import styles from "./hire.module.scss"
import { useState, useEffect, MouseEvent, FormEvent } from "react"
import { useRouter } from 'next/navigation';
import { useHireModalStore } from "@/config/stateManager";
import HireModal from "../hireModal/HireModal";

///Commencing the code 

/**
 * @title Hire Component
 * @returns The Hire component
 */
const Hire = () => {
    const router = useRouter()
    const setHireModal = useHireModalStore(state => state.setHireModal);
  //console.log('Current page:', routerPath);

  return (
    <>
      <div className={`${styles.main}`}>
        <div className={styles.container}>
            <span className={styles.span1}>Have a Project in mind?</span>
            <h3>Hire Me</h3>
            <div className={styles.span2}>
                <span>By hiring me, you can expect a dedicated professional who is committed to delivering robust, reliable and scalable software solutions. I am ready to collaborate with you to bring your ideas to life and drive your business forward.</span>
                <span>Let&apos;s connect and discuss how I can contribute to your success.</span>
            </div>
            <button onClick={() => setHireModal(true)}><span>Contact Me</span></button>
        </div>
      </div>    
      <HireModal />
    </>
    
  );
};

export default Hire;