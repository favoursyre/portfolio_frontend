"use client"
///Layout component

///Libraries -->
import React, { useState, useEffect, createContext } from 'react';
import styles from "./layout.module.scss"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { IContact, IHireModalContext } from '@/app/utils/interfaces';
import { setItem, hireModalKey } from '@/app/utils/utils';
// import { ToastContainer, toast } from 'react-toastify';

///Commencing the code 
const HireModalContext = createContext<IHireModalContext | undefined>(undefined)

/**
 * @title Layout Component
 * @returns The Layout component
 */
const Layout = ({ children, contact_ }: { children: React.ReactNode, contact_: IContact}) => {
  const [hireModal, setHireModal] = useState<boolean>(false)
  ///Setting the hire modal key
  console.log('Hire Modal: ', hireModal)

  return (
    <html lang="en" className={`${styles.html}`}>
      <body>
        <HireModalContext.Provider value={{ hireModal, setHireModal }}>
          <Header />
          {/* <ToastContainer /> */}
          <main className='container'>{children}</main>
          <Footer contact_={contact_} />
        </HireModalContext.Provider>
      </body>
    </html>
  );
};

export default Layout;