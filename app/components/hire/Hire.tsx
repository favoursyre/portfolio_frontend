"use client"
///Hire component

///Libraries -->
import styles from "./hire.module.scss"
import { useState, useEffect, MouseEvent, FormEvent } from "react"
import { useRouter } from 'next/navigation';
import { notify, visitSocialLink } from '@/app/utils/clientUtils';
import { backend, hireModalKey, capitalizeFirstLetter } from '@/app/utils/utils';
import { IHire } from "@/app/utils/interfaces";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ToastContainer } from 'react-toastify';
import CallIcon from '@mui/icons-material/Call';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from '@mui/icons-material/Email';
import validator from 'validator';
import GitHubIcon from '@mui/icons-material/GitHub';
///Commencing the code 

/**
 * @title Hire Component
 * @returns The Hire component
 */
const Hire = () => {
    const router = useRouter()
    const [clientName, setClientName] = useState<string | undefined>("") 
    const [companyName, setCompanyName] = useState<string | undefined>("") 
    const [emailAddress, setEmailAddress] = useState<string | undefined>("")
    const [budget, setBudget] = useState<number | undefined>()
    const [description, setDescription] = useState<string | undefined>("")
    //const hireModalStat = getItem(hireModalKey)
    //const { hireModal, setHireModal } = useContext(false)
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

  return (
    <>
      <div className={`${styles.main}`}>
        <div className={styles.container}>
            <span className={styles.span1}>Have a Project in mind?</span>
            <h3>Hire Me</h3>
            <div className={styles.span2}>
                <span>By hiring me, you can expect a dedicated professional who is committed to delivering robust, reliable, and scalable software solutions. I am ready to collaborate with you to bring your ideas to life and drive your business forward.</span>
                <span>Let&apos;s connect and discuss how I can contribute to your success.</span>
            </div>
            <button onClick={() => setHireModal(() => true)}><span>Contact Me</span></button>
        </div>
    </div>    
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
                    <div className={styles.brief}>+234-9012468855</div>
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
                <button className={styles.instagram} onClick={(e) => visitSocialLink(e, "instagram")}><InstagramIcon /></button>
                <button className={styles.facebook} onClick={(e) => visitSocialLink(e, "facebook")}><FacebookIcon /></button>
                <button className={styles.twitter} onClick={(e) => visitSocialLink(e, "twitter")}><TwitterIcon /></button>
                <button className={styles.linkedin} onClick={(e) => visitSocialLink(e, "linkedin")}><LinkedInIcon /></button>
                <button className={styles.github} onClick={(e) => visitSocialLink(e, "github")}><GitHubIcon /></button>
                {/* <button className={styles.whatsapp}><WhatsappIcon /></button> */}
            </div>
          </div>
          <div className={styles.form}>
            <header>
              <button onClick={() => setHireModal(() => false)}>
                <CloseIcon />
              </button>
            </header>
            <div className={styles.brief}>
            <span id={styles.brief_2}>I&apos;d love to help</span>
              <span id={styles.brief_1}>
                <strong>What project do you have in mind? </strong>
              </span>
            </div>
            {/* <form onSubmit={(e) => sendInquiry(e)}>
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
            </form> */}
            <div className={styles.instruction}>
              <span>Kindly send an email to <strong>favourndubuisi.official@gmail.com</strong> with the following the details; </span>
              <ul>
                <li>Name</li>
                <li>Company&apos;s name (if any)</li>
                <li>Budget</li>
                <li>Job description</li>
              </ul>
            </div>
          </div>
          
        </div>
        </div>
    </>
    
  );
};

export default Hire;