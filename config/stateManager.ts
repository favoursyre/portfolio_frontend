//This contains the script for state management 

//Libraries
import { create } from "zustand";
import { HireModalStore } from "../config/interfaces";

//Commencing code

//Hire Modal state store
export const useHireModalStore = create<HireModalStore>((set) => ({
    hireModal: false,
    setHireModal: (status) => set(() => ({ hireModal: status }))
}))