import { create } from "zustand";
import { onBoardingStore } from "../Onboarding/Store/Store";

export const dashboardStore = create((set) => ({
  campaigns: [],
}));
