import { create } from "zustand";

interface FloorStore {
  selectedFloor: number | null;
  setSelectedFloor: (floor: number) => void;
  floorData: any;
  setFloorData: (data: any) => void;
  price: any;
  message: any;
}

export const useFloorStore = create<FloorStore>((set) => ({
  selectedFloor: null,
  floorData: null,
  price:'',
  message:'',
  setSelectedFloor: (floor) => set({ selectedFloor: floor }),
  setFloorData: (data) => set({ floorData: data }),
  setPrice:(price: any)=>set({price}),
  setMessage:(message: any)=> set({message})
}));
