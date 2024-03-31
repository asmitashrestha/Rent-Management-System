import { create } from "zustand";
import * as apiClient from "../../api-client";

interface FloorStore {
  selectedFloor: number | null;
  setSelectedFloor: (floor: number) => void;
  floorData: any;
  fetchFloorData: (selectedFloor: number) => Promise<void>;
}

export const useFloorStore = create<FloorStore>((set) => ({
  floorData: [],
  selectedFloor: null,
  setSelectedFloor: (floor) => set({ selectedFloor: floor }),
  fetchFloorData: async (selectedFloor) => {
    try {
      console.log("floorNumber in store", selectedFloor);
      const response = await apiClient.fetchFloor(selectedFloor);
      console.log("API Response:", response);
      if (response !== undefined) {
         set({ floorData: response });
      } else {
        console.error("API returned undefined response.");
      }
    } catch (error) {
      console.error("Error fetching floor data:", error);
    }
  },
}));
