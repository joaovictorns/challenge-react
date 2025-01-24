import { useState } from 'react';


const useFormValidation = (form) => {
  const [errors, setErrors] = useState({});
  const isSubmitDisabled = Object.values(errors).some((error) => error) || 
    Object.values(form).some((field) => !field.trim());

  const validateField = (field, value) => {
    let error = '';

    if (field === 'name' && value.length < 10) {
      error = 'O nome deve ter no mínimo 10 caracteres.';
    } else if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'O email deve ser válido.';
    } else if (
      field === 'password' &&
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(value)
    ) {
      error = 'A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula e um caractere especial.';
    } else if (field === 'confirmPassword' && value !== form.password) {
      error = 'A confirmação deve ser igual à senha.';
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  return { errors, isSubmitDisabled, validateField };
};

export default useFormValidation;
