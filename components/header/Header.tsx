"use client"
///Header component

///Libraries -->
//import Link from 'next/link';
import { useState, useEffect, MouseEvent } from 'react';
import HireModal from '../hireModal/HireModal';
import { useHireModalStore } from '@/config/stateManager';
import { sleep } from '@/config/utils';
import { visitSocialLink } from '@/config/clientUtils';
import styles from "./header.module.scss"
import MenuIcon from "@mui/icons-material/Menu";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { usePathname, useRouter } from 'next/navigation';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

///Commencing the code 
//const HireModalContext = createContext<IHireModalContext>({ hireModal: false, setHireModal: () => {} })

/**
 * @title Header Component
 * @returns The Header component
 */
const Header = () => {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const [menuBar, setMenuBar] = useState(false)
    const [menuModal, setMenuModal] = useState(false)
    const hireModal = useHireModalStore(state => state.hireModal);
    const setHireModal = useHireModalStore(state => state.setHireModal);

  ///This handles the contact modal
  const menuButton = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, menu: boolean): Promise<void> =>  {
    e.preventDefault()
    console.log('Menu: ', menu)

    if (menu) {
      setMenuModal(() => true)
      await sleep(100)
      setMenuBar(() => true)
    } else {
      setMenuBar(() => false)
      await sleep(500)
      setMenuModal(() => false)
    }
    setMenu(() => menu)
  }

  ///This function handles the nav links within the menu bar
  const menuBarNav = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, path: string): Promise<void> => {
    e.preventDefault()

    await menuButton(e, !menu)

    if (path === "hireModal") {
      setHireModal(true)
    } else {
      router.push(path)
    }
    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      }, 100);
  
      return () => {
        clearInterval(interval);
      };
    
  }, [hireModal]);

  return (
    <>
        <header className={`${styles.header}`}>
            <div className={styles.logo} onClick={() => router.push('/')}>
                <img
                    src="https://drive.google.com/uc?export=download&id=18qlFm8b1zWrY202Ogd7K3gSOHbmnEX6K"
                    alt="logo"
                />
            </div>

            <div className={`${styles.category}`} >
                <button onClick={() => router.push('/#about')}><span>About Me</span></button>
                <button onClick={() => {
                  //setHireModal(() => true)
                  setHireModal(true)
                  console.log("modal: ", hireModal)
                }}><span>Hire Me</span></button>
                <button onClick={() => router.push('/#expertise')}><span>Expertise</span></button>
                <button onClick={() => router.push('/#experience')}><span>Experience</span></button>
                <button onClick={() => router.push('/#project')}><span>Projects</span></button>
                {/* <button onClick={() => router.push('/#testimony')}><span>Testimonial</span></button> */}
            </div>
        </header>
        {/* <HireModal value_={hireModal} /> */}
        <HireModal />
        <div className={styles.socials}>
            <div className={styles.container}>
                <button className={styles.instagram} onClick={(e) => visitSocialLink(e, "instagram")}><InstagramIcon /></button>
                <button className={styles.facebook} onClick={(e) => visitSocialLink(e, "facebook")}><FacebookIcon /></button>
                <button className={styles.twitter} onClick={(e) => visitSocialLink(e, "twitter")}><TwitterIcon /></button>
                <button className={styles.linkedin} onClick={(e) => visitSocialLink(e, "linkedin")}><LinkedInIcon /></button>
                <button className={styles.github} onClick={(e) => visitSocialLink(e, "github")}><GitHubIcon /></button>
                {/* <button className={styles.whatsapp} onClick={(e) => visitSocialLink(e, "whatsapp")}><WhatsappIcon /></button> */}
            </div>
        </div> 
        <header className={`${styles.mobileHeader}`}>
            <div className={styles.logo} onClick={() => router.push('/')}>
              <img
                src="https://drive.google.com/uc?export=download&id=18qlFm8b1zWrY202Ogd7K3gSOHbmnEX6K"
                alt="logo"
              />
            </div>
            
            <button onClick={(e) => menuButton(e, !menu)}><MenuIcon className={styles.icon} /></button>
        </header>
        <div className={menuModal ? styles.activeMenuModal : styles.inActiveMenuModal}>
        <div className={`${menuBar ? styles.activeMenu : styles.inActiveMenu}`}>
          <button onClick={(e) => menuBarNav(e, "/#about")}><span>About Me</span></button>
          <button onClick={(e) => menuBarNav(e, "hireModal")}><span>Hire Me</span></button>
          <button onClick={(e) => menuBarNav(e, '/#expertise')}><span>Expertise</span></button>
          <button onClick={(e) => menuBarNav(e, '/#experience')}><span>Experience</span></button>
          <button onClick={(e) => menuBarNav(e, '/#project')}><span>Projects</span></button>
          {/* <button onClick={(e) => menuBarNav(e, '/#testimony')}><span>Testimonial</span></button> */}
        </div> 
        </div>
        
    </>
  );
};

export default Header;