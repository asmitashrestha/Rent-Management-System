import { create } from "zustand";
interface CustomerState {
  customerData: any[];
  setCustomerData: (data: any[]) => void;
}

export const useCustomerStore = create<CustomerState>((set) => ({
  customerData: [],
  setCustomerData: (data: any[]) => set({ customerData: data }),
}));
