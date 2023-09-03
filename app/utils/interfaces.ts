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

///Declaring the interface for hire status
export interface IHireStatus {
    hireStatus: boolean
}
  
  ///Declaring the interface for testimony
  export interface ITestimony {
    _id?: string,
    name?: string,
    image?: string,
    stars?: number,
    testimony?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

///Declaring the interface for project
export interface IProject {
    _id?: string,
    category?: string,
    name?: string,
    image?: string,
    description?: string,
    technologies?: Array<string>,
    sourceCodeLink?: string,
    appLink?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

///Declaring the interface for expertise
export interface IExpertise {
    _id?: string,
    name?: string,
    image?: string,
    percent?: number,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}

///Declaring the interface for hire
export interface IHire {
    _id?: string,
    clientName?: string,
    companyName?: string,
    emailAddress?: string,
    budget?: number,
    description?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}