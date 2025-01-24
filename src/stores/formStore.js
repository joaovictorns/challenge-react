import { create } from "zustand";

const useFormStore = create((set) => ({
  form: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  setForm: (data) =>
    set((state) => ({
      form: { ...state.form, ...data },
    })),
  resetForm: () =>
    set({
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    }),
}));

export default useFormStore;
