"use client"
///Hire Modal component

///Libraries -->
import Link from 'next/link';
import { useState, useEffect, MouseEvent, FormEvent, useContext, createContext } from 'react';
import { capitalizeFirstLetter, getItem, hireModalKey, setItem } from '@/app/utils/utils';
import { notify } from '@/app/utils/clientUtils';
import { IHireModalContext } from '@/app/utils/interfaces';
import styles from "./hire.module.scss"
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

///Commencing the code 
const HireModalContext = createContext<IHireModalContext>({ hireModal: false, setHireModal: () => {} })

/**
 * @title Hire Modal Component
 * @returns The Hire Modal component
 */
const HireModal = ({ value_ }: { value_: boolean }) => {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const [query, setQuery] = useState(String)
    const [clientName, setClientName] = useState<string | undefined>("") 
    const [companyName, setCompanyName] = useState<string | undefined>("") 
    const [emailAddress, setEmailAddress] = useState<string | undefined>("")
    const [budget, setBudget] = useState<number | undefined>()
    const [description, setDescription] = useState<string | undefined>("")
    const hireModalStat = getItem(hireModalKey)
    const [ hireModal, setHireModal ] = useState<boolean>(value_)
    //const { hireModal, setHireModal ] = useContext(value_)
  //console.log('Current page:', routerPath);

  //console.log("hire component: ", hireModal)

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
    // try {
    //   //console.log('Clicked')
    //   const inquiry: IInquiry = {firstName, lastName, emailAddress, message}
    //   console.log("Order: ", inquiry)
    //   const res = await fetch(`${backend}/inquiry/add/`, {
    //       method: 'POST',
    //       body: JSON.stringify(inquiry),
    //       headers: {
    //       'Content-Type': 'application/json',
    //       },
    //   });
      
    // const data = await res.json();
    // console.log("Data: ", data);

    // if (res.ok) {
    //   notify("success", `Your message was sent successfully`)
    //   setContactModal(() => false)
    //   window.location.reload()
    // } else {
    //   throw Error(`${data}`)
    // }
    
    // } catch (error) {
    //     console.log("error: ", error)
    //     notify("error", `${error}`)
    // }
  }

  ///This handles the contact modal
//   const contactModal = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, action: boolean): void =>  {
//     e.preventDefault()

//     //setItem(hireModalKey, action)
//     setHireModal(() => action)
//     console.log("Checking: ", hireModal)
//   }

  useEffect(() => {
    const interval = setInterval(() => {
      }, 100);
  
      return () => {
        clearInterval(interval);
      };
    
  }, [hireModal]);

  return (
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
                    <div className={styles.brief}>Evans Lodge, Hilltop, UNN,<br/> Enugu, Nigeria.</div>
                </div>
                <div className={styles.phoneNumber}>
                    <div className={styles.head}>
                        <div className={styles.icon}>
                            <CallIcon style={{ fontSize: "1.15rem" }} />
                        </div>
                        <span><strong>Let's Talk</strong></span>
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
              <button onClick={() => {
                setHireModal(() => false)
                console.log("close clicked")
                }}>
                <CloseIcon />
              </button>
            </header>
            <div className={styles.brief}>
            <span id={styles.brief_2}>I'd love to help</span>
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
  );
};

export default HireModal;