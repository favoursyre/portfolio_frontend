"use client"
///Header component

///Libraries -->
import Link from 'next/link';
import { useState, useEffect, MouseEvent, FormEvent, useContext, createContext } from 'react';
import { notify } from '@/app/utils/clientUtils';
import { capitalizeFirstLetter, backend, hireModalKey, sleep } from '@/app/utils/utils';
import { IHireModalContext, IHire } from '@/app/utils/interfaces';
//import HireModal from '../modal/hire/Hire';
import styles from "./header.module.scss"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { usePathname, useRouter } from 'next/navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ToastContainer } from 'react-toastify';
import CallIcon from '@mui/icons-material/Call';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import EmailIcon from '@mui/icons-material/Email';
//import { ICartSpec } from '@/app/utils/interfaces';
import { useDispatch, useSelector } from "react-redux";
import { positive, negative } from '../../utils/redux/modal';

///Commencing the code 
const HireModalContext = createContext<IHireModalContext>({ hireModal: false, setHireModal: () => {} })

/**
 * @title Header Component
 * @returns The Header component
 */
const Header = () => {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const [menuBar, setMenuBar] = useState(false)
    const [menuModal, setMenuModal] = useState(false)
    const [query, setQuery] = useState(String)
    const [clientName, setClientName] = useState<string | undefined>("") 
    const [companyName, setCompanyName] = useState<string | undefined>("") 
    const [emailAddress, setEmailAddress] = useState<string | undefined>("")
    const [budget, setBudget] = useState<number | undefined>()
    const [description, setDescription] = useState<string | undefined>("")
    //const hireModalStat = getItem(hireModalKey)
    //const dispatch = useDispatch();
    const [hireModal, setHireModal] = useState<boolean>(false)
  //console.log('Current page:', routerPath);

  ///This sends the message from contact-us
  const sendInquiry = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    //Validating args
    if (!clientName) {
      notify("error", "Your name is required")
      return
    } else if (!emailAddress) {
        notify("error", "Email address is required")
        return
    } else if (!validator.isEmail(emailAddress)) {
        notify("error", "Email address is not valid")
        return
    } else if (!budget) {
        notify("error", "Budget is not valid")
        return
    } else if (!description) {
        notify("error", "Job description is required")
        return
    }

    //Send the order to the backend
    try {
      //console.log('Clicked')
      const hire: IHire = {clientName, companyName, emailAddress, budget, description}
      console.log("Order: ", hire)
      const res = await fetch(`${backend}/hire/add/`, {
          method: 'POST',
          body: JSON.stringify(hire),
          headers: {
          'Content-Type': 'application/json',
          },
      });
      
    const data = await res.json();
    console.log("Data: ", data);

    if (res.ok) {
      notify("success", `Your message was sent successfully`)
      setHireModal(() => false)
      window.location.reload()
    } else {
      throw Error(`${data}`)
    }
    
    } catch (error) {
        console.log("error: ", error)
        notify("error", `${error}`)
    }
  }

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
      setHireModal(() => true)
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
                  setHireModal(() => true)
                  console.log("modal: ", hireModal)
                }}><span>Hire Me</span></button>
                <button onClick={() => router.push('/#experience')}><span>Expertise</span></button>
                <button onClick={() => router.push('/#expertise')}><span>Experience</span></button>
                <button onClick={() => router.push('/#projects')}><span>Projects</span></button>
                <button onClick={() => router.push('/#testimony')}><span>Testimonial</span></button>
            </div>
        </header>
        {/* <HireModal value_={hireModal} /> */}
        <div className={`${styles.contactModal} ${!hireModal ? styles.inActiveContactModal : ""}`}>
        <ToastContainer />
        <div className={styles.container}>
          <div className={styles.image}>
            <div className={styles.contacts}>
                <div className={styles.officeAddress}>
                    <div className={styles.head}>
                        <div className={styles.icon}>
                            <LocationOnIcon style={{ fontSize: "1.15rem" }}  />
                        </div>
                        <span><strong>Address</strong></span>
                    </div>
                    <div className={styles.brief}>Evans Lodge, Hilltop, UNN,<br /> Enugu, Nigeria.</div>
                </div>
                <div className={styles.phoneNumber}>
                    <div className={styles.head}>
                        <div className={styles.icon}>
                            <CallIcon style={{ fontSize: "1.15rem" }} />
                        </div>
                        <span><strong>Let&apos;s Talk</strong></span>
                    </div>
                    <div className={styles.brief}>+234-9090982848</div>
                </div>
                <div className={styles.emailAddress}>
                    <div className={styles.head}>
                            <div className={styles.icon}>
                                <EmailIcon style={{ fontSize: "1.15rem" }} />
                            </div>
                            <span><strong>Email Address</strong></span>
                        </div>
                        <div className={styles.brief}>favourndubuisi.official@gmail.com</div>
                </div>
            </div>
            <div className={styles.imgSocials}>
                <button className={styles.instagram}><InstagramIcon /></button>
                <button className={styles.facebook}><FacebookIcon /></button>
                <button className={styles.twitter}><TwitterIcon /></button>
                <button className={styles.linkedin}><LinkedInIcon /></button>
                <button className={styles.whatsapp}><WhatsappIcon /></button>
            </div>
          </div>
          <div className={styles.form}>
            <header>
              <button onClick={(e) => setHireModal(() => false)}>
                <CloseIcon />
              </button>
            </header>
            <div className={styles.brief}>
            <span id={styles.brief_2}>I&apos;d love to help</span>
              <span id={styles.brief_1}>
                <strong>What project do you have in mind? </strong>
              </span>
            </div>
            <form onSubmit={(e) => sendInquiry(e)}>
              <div className={styles.div_1}>
                <div className={styles.div_11}>
                  <input
                    placeholder="Your Name"
                    type="text"
                    onChange={(e) => setClientName(() => capitalizeFirstLetter(e.target.value))}
                    value={clientName}
                  />
                </div>
                <div className={styles.div_12}>
                  <input
                    placeholder="Company's Name"
                    type="text"
                    onChange={(e) => setCompanyName(() => capitalizeFirstLetter(e.target.value))}
                    value={companyName}
                  />
                </div>
              </div>
              <div className={styles.div_2}>
                <div className={styles.div_21}>
                    <input
                    placeholder="Email Address"
                    type="email"
                    onChange={(e) => setEmailAddress(() => e.target.value)}
                    value={emailAddress}
                    />
                </div>
                <div className={styles.div_22}>
                    <input
                    placeholder="Your Budget (USD)"
                    type="number"
                    onChange={(e) => setBudget(() => Number(e.target.value))}
                    value={budget}
                    />
                </div>
              </div>
              <div className={`${styles.div_3}`}>
                <textarea
                  placeholder="Job Description"
                  onChange={(e) => setDescription(() => e.target.value)}
                  value={description}
                ></textarea>
              </div>
              <button>
                <span>SEND</span>
              </button>
            </form>
          </div>
        </div>
        </div>
        <div className={styles.socials}>
            <div className={styles.container}>
                <button className={styles.instagram}><InstagramIcon /></button>
                <button className={styles.facebook}><FacebookIcon /></button>
                <button className={styles.twitter}><TwitterIcon /></button>
                <button className={styles.linkedin}><LinkedInIcon /></button>
                <button className={styles.whatsapp}><WhatsappIcon /></button>
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
          <button onClick={(e) => menuBarNav(e, '/#experience')}><span>Expertise</span></button>
          <button onClick={(e) => menuBarNav(e, '/#expertise')}><span>Experience</span></button>
          <button onClick={(e) => menuBarNav(e, '/#projects')}><span>Projects</span></button>
          <button onClick={(e) => menuBarNav(e, '/#testimony')}><span>Testimonial</span></button>
        </div> 
        </div>
        
    </>
  );
};

export default Header;