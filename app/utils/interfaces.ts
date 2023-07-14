///This would contain all interfaces that will be used

///Libraries -->
import React, { Dispatch, SetStateAction } from 'react';

///Commencing the code
/**
 * @notice The interface for contact mongoose schema
 * @param phoneNumber The phone number of the company
 * @param emailAddress The email address of the company
 */
export interface IContact {
    emailAddress?: string
    phoneNumber?: string,
    officeAddress?: string,
    emailLink?: string,
    instagramLink?: string,
    facebookLink?: string,
    whatsappLink?: string
}

///Declaring the interface for hire modal context
export interface IHireModalContext {
    hireModal: boolean;
    setHireModal: (value: boolean) => void;
};
  