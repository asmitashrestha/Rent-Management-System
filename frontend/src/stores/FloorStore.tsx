import { create } from "zustand";

interface FloorStore {
  selectedFloor: number | null;
  setSelectedFloor: (floor: number) => void;
  floorData: any;
  setFloorData: (data: any) => void;
}

export const useFloorStore = create<FloorStore>((set) => ({
  selectedFloor: null,
  floorData: null,
  setSelectedFloor: (floor) => set({ selectedFloor: floor }),
  setFloorData: (data) => set({ floorData: data }),
}));
