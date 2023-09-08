"use client"
///This contains utility functions that are strictly for client based components

///Libraries -->
import { toast } from 'react-toastify';
import { MouseEvent } from 'react';

///Commencing the code

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

///This links opens the social link
export const visitSocialLink = (e:  MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, social: string) => {
    e.preventDefault()

    if (window) {
        if (social === "instagram") {
            window.open("https://www.instagram.com/favoursyre", '_blank');
        } else if (social === "facebook") {
            window.open("https://web.facebook.com/Favour.Syre", "_blank")
        } else if (social === "twitter") {
            window.open("https://twitter.com/favoursyre", "_blank")
        } else if (social === "linkedin") {
            window.open("https://www.linkedin.com/in/favour-ndubuisi-7b019786/", "_blank")
        } else if (social === "github") {
            window.open("https://github.com/favoursyre", "_blank")
        } else {
            undefined
        }
    } else {
        undefined
    }
}