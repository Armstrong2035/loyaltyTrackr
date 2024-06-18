import { create } from "zustand";
import { onBoardingStore } from "../Onboarding/Store/Store";


const redemptionOptions = onBoardingStore((state) state.redemptionOptions)
export const dashboardStore = create ((set) => ({
    campaigns: []

}))