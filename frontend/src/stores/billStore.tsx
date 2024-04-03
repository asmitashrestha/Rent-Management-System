import create from 'zustand';

const useBillStore = create((set) => ({
  formData: {
    floorRent: '',
    electricityCharges: '',
    waterCharges: '',
    internetCharges: '',
    others: '',
  },
  error: null,
  setError: (error: any) => set({ error }),
  setFormData: (formData: any) => set({ formData }),
  resetFormData: () =>
    set({
      formData: {
        floorRent: '',
        electricityCharges: '',
        waterCharges: '',
        internetCharges: '',
        others: '',
      },
    }),
}));

export default useBillStore;
