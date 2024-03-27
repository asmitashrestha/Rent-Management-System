import { create } from "zustand";
import * as apiClient from "../../api-client";

interface BuildingState {
  buildingData: any[];
  fetchBuildingData: () => Promise<void>;
}

export const useBuildingStore = create<BuildingState>((set) => ({
  buildingData: [],
  fetchBuildingData: async () => {
    try {
      const response = await apiClient.fetchbuilding();
      set({ buildingData: response });
    } catch (error) {
      console.error("Failed to fetch building data:", error);
    }
  },
}));
