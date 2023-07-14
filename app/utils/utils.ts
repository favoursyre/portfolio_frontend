///This contains all the utilities

///Libraries --> 
import React, { createContext } from 'react';
import { toast } from 'react-toastify';
import { Inter, Roboto, Poppins, Aclonica, Public_Sans } from 'next/font/google'
import { IHireModalContext } from './interfaces';

///Commencing the code

///Exporting the font family that will be used for this project
export const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const roboto = Roboto({
    weight: ['100', '500'],
    subsets: ['latin'],
});
  
export const inter = Inter({
    weight: ['100', '400'],
    subsets: ['latin'],
})

export const aclonica = Aclonica({
    weight: ['400'],
    subsets: ['latin'],
})

export const public_sans = Public_Sans({
    subsets: ["latin"]
})


//logo = <a href="https://www.flaticon.com/free-icons/letter-f" title="letter f icons">Letter f icons created by arnikahossain - Flaticon</a>
//color = "#83DBB7"

///The backend api point
export const backend = "localhost:4200"

///This function capitalizes the first letter of every word
export const capitalizeFirstLetter = (str: string | undefined): string | undefined => {
    if (str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }
  }
  
///This function exports a array shuffler function
export const shuffleArray = (array: Array<any>): Array<any> => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
    return newArray;
}

///This function triggers a notification when called
export const notify = (type: string, message: string): void => {
    switch (type) {
        case "info":
            toast.info(message, {
                position: toast.POSITION.TOP_CENTER,
                style: { backgroundColor: 'white', color: '#1170FF' },
            });
            break
        case "error":
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER,
                style: { backgroundColor: 'white', color: '#1170FF' },
            });
            break
        case "success":
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER,
                style: { backgroundColor: 'white', color: '#1170FF' },
            }); 
            break
        case "warn":
            toast.warn(message, {
                position: toast.POSITION.TOP_CENTER,
                style: { backgroundColor: 'white', color: '#1170FF' },
            }); 
            break
        default:
            console.log("wrong input")
            break
    }
    
}

///This function saves a value to localstorage
export const setItem = (key: string, value: any): void => {
    if (window.localStorage) {
        let jsonData = JSON.stringify(value)
        localStorage.setItem(key, jsonData);
    } else {
        null
    }
}
  
export const getItem = (key: string): any => {
    // Parse the retrieved data string back into an object
    //console.log('Local: ', localStorage.getItem(key))
    if (window.localStorage) {
        const item = localStorage.getItem(key)
        //console.log('Item New: ', item)
        if (item === null) {
            return null
        } else {
            if (item === "undefined") {
                return null
            } else {
                return JSON.parse(item);
            }
        }
    } else {
        return null
    }
}

///This is used to remove the item
export const removeItem = (key: string) => {
    if (window.localStorage) {
        localStorage.removeItem(key);
    } else {
        null
    }
}

///The hire modal key
export const hireModalKey: string = "syreHireModal"

///The hire modal context


///The function delays the code
export const sleep = (milliseconds: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }