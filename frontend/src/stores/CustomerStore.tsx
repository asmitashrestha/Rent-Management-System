
import create from 'zustand';

const useCustomerStore = create((set) => ({
  showForm: false,
  customerName: '',
  setShowForm: (showForm: any) => set({ showForm }),
  setCustomerName: (customerName: any) => set({ customerName }),
}));

export default useCustomerStore;
