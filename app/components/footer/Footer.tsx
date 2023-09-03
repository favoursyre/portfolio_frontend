"use client"
///Footer component

///Libraries -->
import Link from 'next/link';
import { useState, useEffect, MouseEvent, FormEvent } from 'react';
import styles from "./footer.module.scss"
import { usePathname, useRouter } from 'next/navigation';
import LocationIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IContact } from '@/app/utils/interfaces';

///Commencing the code 

/**
 * @title Footer Component
 * @returns The Footer component
 */
const Footer = ({ contact_ }: { contact_: IContact }) => {
    const [contact, setContact] = useState(contact_)
    const router = useRouter()
    const routerPath = usePathname();
  //console.log('Current page:', routerPath);

  return (
    <div className={`${styles.main}`}>
      <div className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.logo} onClick={() => router.push('/')}>
                <img
                    src="https://drive.google.com/uc?export=download&id=18qlFm8b1zWrY202Ogd7K3gSOHbmnEX6K"
                    alt="logo"
                />
            </div>

            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowCircleUpIcon /></button>
      </div>
      <div className={styles.div2}>
        <span >Copyright &copy; {new Date().getFullYear()} Favour Syre, All rights reserved</span>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;