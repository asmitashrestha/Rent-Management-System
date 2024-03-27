import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface BillModalState {
  isBillOpen: boolean;
  openBillModal: () => void;
  closeBillModal: () => void;
}

interface CustomerModalState {
  isCustomerOpen: boolean;
  openCustomerModal: () => void;
  closeCustomerModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useBillModalStore = create<BillModalState>((set) => ({
  isBillOpen: false,
  openBillModal: () => set({ isBillOpen: true }),
  closeBillModal: () => set({ isBillOpen: false }),
}));

export const useCustomerModalStore = create<CustomerModalState>((set) => ({
  isCustomerOpen: false,
  openCustomerModal: () => set({ isCustomerOpen: true }),
  closeCustomerModal: () => set({ isCustomerOpen: false }),
}));
