"use client"
///Experience component

///Libraries -->
import { useState, MouseEvent } from "react"
import styles from "./experience.module.scss"
import { useRouter } from 'next/navigation';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from "@mui/icons-material/Add";

///Commencing the code 

/**
 * @title Experience Component
 * @returns The Experience component
 */
const Experience = () => {
    const router = useRouter()
    const [activeIndex, setActiveIndex] = useState<number>(0)
  //console.log('Current page:', routerPath);

  ///This function is triggered when a user wants to view a work experience
  const viewWork = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, index: number): void => {
    e.preventDefault()

    setActiveIndex(() => index)
  }

  return (
    <div className={`${styles.main}`} id="experience">
        <span className={styles.titleHead}>My Journey So Far</span>
        <h3>My Experiences</h3>
        <div className={styles.container}>
          <div className={styles.education}>
              <div className={styles.header}>
                <SchoolIcon className={styles.icon} />
                <h5>Education</h5>
              </div>
              <div className={styles.body}>
                <div className={styles.unn}>
                  <div className={styles.circle}></div>
                  <span className={styles.span1}>University of Nigeria, Nsukka</span>
                  <span className={styles.span2}>BS.C., Computer Science</span>
                  <div className={styles.span3}>
                    <span>Nigeria</span>
                    <div className={styles.date}>
                      <CalendarMonthIcon className={styles.calendar} />
                      <span>June 2011 - July 2012</span>
                    </div>
                  </div>
                </div>
                <div className={styles.longford}>
                  <div className={styles.circle}></div>
                    <span className={styles.span1}>Longford International School</span>
                    <span className={styles.span2}>SSCE, SSS3</span>
                    <div className={styles.span3}>
                    <span className={styles.country}>Nigeria</span>
                    <div className={styles.date}>
                      <CalendarMonthIcon className={styles.calendar} />
                      <span>June 2011 - July 2012</span>
                    </div>
                  </div>
                </div>
                <div className={styles.labgus}>
                  <div className={styles.circle}></div>
                    <span className={styles.span1}>Labgus International School</span>
                    <span className={styles.span2}>SSS1 - SSS2</span>
                    <div className={styles.span3}>
                    <span className={styles.country}>Nigeria</span>
                    <div className={styles.date}>
                      <CalendarMonthIcon className={styles.calendar} />
                      <span>June 2011 - July 2012</span>
                    </div>
                  </div>
                </div>
                <div className={styles.cjpac}>
                  <div className={styles.circle}></div>
                  <span className={styles.span1}>Canon James Pearse Anglican College</span>
                  <span className={styles.span2}>JSCE, JSS1 - JSS3</span>
                  <div className={styles.span3}>
                  <span className={styles.country}>Nigeria</span>
                  <div className={styles.date}>
                    <CalendarMonthIcon className={styles.calendar} />
                    <span>June 2011 - July 2012</span>
                  </div>
                </div>
                </div>
              </div>
          </div>
          <div className={styles.work}>
            <div className={styles.header}>
              <WorkIcon className={styles.icon} />
              <h5>Profession</h5>
            </div>
          <div className={styles.body}>
            <div className={styles.nupat} onClick={(e) => viewWork(e, 0)}>
              <div className={styles.circle}><AddIcon className={activeIndex !== 0 ? styles.icon : styles.inActiveIcon}/></div>
              <div className={styles.brief}>
                <span className={styles.span1}>Freelancer</span>
                <span className={styles.span2}>Full Stack Engineer</span>
                <div className={styles.span3}>
                <span className={styles.country}>Nigeria (Remote)</span>
                <div className={styles.date}>
                  <CalendarMonthIcon className={styles.calendar} />
                  <span>July 2020 - Current</span>
                </div>
              </div>
              </div>
              <div className={`${styles.details} ${activeIndex !== 0 ? styles.inActiveDetails : ""}`}>
                <ul>
                  <li>Research, design, develop, test and maintain web applications and blockchain solutions tailored to client requirements.</li>
                  <li>Create responsive and intuitive user interfaces using frontend technologies like SCSS, React & NextTS</li>
                  <li>Design and implement server-side logic, databases and APIs using backend technologies like ExpressTS & MongoDB</li>
                  <li>Design and implement DApps using blockchain technologies like smart contracts, Ethereum, IPFS, Infura and Polygon</li>
                  <li>Manage databases, ensuring data integrity, security, and optimal performance.</li>
                  <li>Utilize version control systems (e.g., Git) for collaborative development and codebase management.</li>
                  <li>Conduct unit tests, integration tests and debugging to ensure robustness and reliability of the applications using technologies like JMeter</li>
                  <li>Implement security best practices, including encryption, authentication, auditing and authorization to protect applications and user data.</li>
                  <li>Engage with clients to gather requirements, provide project updates and offer technical support and consultations.</li>
                  {/* <li>Maintained understanding of current web technologies and programming practices through continuing education and participation in professional conferences and workshops</li> */}
                </ul>
                <span><strong>Technologies Used: </strong>React JS, JMeter, Ethereum, Polygon, Infura, MongoDB, Solidity, Hardhat, Typescript, NodeJS, NextJS, SCSS, ExpressJS, IPFS</span>
              </div>
            </div>
            {/* <div className={styles.payoneer} onClick={(e) => viewWork(e, 1)}>
            <div className={styles.circle}><AddIcon className={activeIndex !== 1 ? styles.icon : styles.inActiveIcon}/></div>
            <div className={styles.brief}>
                <span className={styles.span1}>Payoneer</span>
                <span className={styles.span2}>Senior Backend Engineer</span>
                <div className={styles.span3}>
                <span className={styles.country}>USA (Remote)</span>
                <div className={styles.date}>
                  <CalendarMonthIcon className={styles.calendar} />
                  <span>November 2020 - August 2022</span>
                </div>
              </div>
              </div>
              <div className={`${styles.details} ${activeIndex !== 1 ? styles.inActiveDetails : ""}`}>
                <ul>
                  <li>Maintained and extended current client and server side applications responsible for integration and business logic.</li>
                  <li>Worked along with a team of frontend engineers to standardize the design system comprising reusable UI components in order to maintain uniformity of design across products.</li>
                  <li>Implemented cyber security best practices to achieve stable and secured systems.</li>
                </ul>
                <span><strong>Technologies Used: </strong>Typescript, NodeJS, ExpressJS, MongoDB, Soft Skills</span>
              </div>
            </div>
            <div className={styles.nomba} onClick={(e) => viewWork(e, 2)}>
            <div className={styles.circle}><AddIcon className={activeIndex !== 2 ? styles.icon : styles.inActiveIcon}/></div>
            <div className={styles.brief}>
                <span className={styles.span1}>Nomba</span>
                <span className={styles.span2}>Senior Backend Engineer</span>
                <div className={styles.span3}>
                <span className={styles.country}>Nigeria (Hybrid)</span>
                <div className={styles.date}>
                  <CalendarMonthIcon className={styles.calendar} />
                  <span>February 2019 - November 2020</span>
                </div>
              </div>
              </div>
              <div className={`${styles.details} ${activeIndex !== 2 ? styles.inActiveDetails : ""}`}>
                <ul>
                  <li> Built atlas service, a geo-tracking web service for collecting the exact location and bio-data of registered agents which helped drove up the revenue by 10% - 15%.</li>
                  <li>Worked on improving verification service by introducing a retry policy for multiple identity verification on the backend incase if one of them fails to verify an identity document due to unforeseen issues. This reduced identity verification failures from 30% to 5%.</li>
                  <li>Optimized nightly job to accommodate growth in the size of the input from the data pipeline by leveraging Airflow and PubSub. Eliminated midnight app crashes and downtime entirely.</li>
                </ul>
                <span><strong>Technologies Used: </strong>Typescript, NodeJS, ExpressJS, MongoDB, Soft Skills</span>
              </div>
            </div>
            <div className={styles.andela} onClick={(e) => viewWork(e, 3)}>
            <div className={styles.circle}><AddIcon className={activeIndex !== 3 ? styles.icon : styles.inActiveIcon}/></div>
            <div className={styles.brief}>
                <span className={styles.span1}>Andela</span>
                <span className={styles.span2}>Full-Stack Engineer</span>
                <div className={styles.span3}>
                <span className={styles.country}>Nigeria (Hybrid)</span>
                <div className={styles.date}>
                  <CalendarMonthIcon className={styles.calendar} />
                  <span>April 2018 - February 2019</span>
                </div>
              </div>
              </div>
              <div className={`${styles.details} ${activeIndex !== 3 ? styles.inActiveDetails : ""}`}>
                <ul>
                  <li>Orchestrated RESTful API’s using Node JS, Express JS and Mongo DB that was used to serve data to ReactJS frontend framework for building high end and scalable websites for clients.</li>
                  <li>Maintained understanding of current web technologies and programming practices through continuing education and participation in professional conferences and workshops.</li>
                </ul>
                <span><strong>Technologies Used: </strong>Typescript, NodeJS, ReactJS, SCSS, ExpressJS, MongoDB, Soft Skills</span>
              </div>
            </div> */}
          </div>
        </div>
        </div>
    </div>
  );
};

export default Experience;