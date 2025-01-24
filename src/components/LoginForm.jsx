import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Card, Text } from "@amigoapp/doca-react";
import "../styles/LoginForm.css";
import amigoLogo from "../assets/amigo-icon-small.svg";
import useFormStore from "../stores/formStore";

function LoginForm({ onSubmit, formData }) {
	const {
		form,
		setForm,
		resetForm,
	} = useFormStore();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm({
		defaultValues: formData,
	});

	const handleClean = () => {
		clearErrors();
		reset({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		});
		console.log(errors)
	};

  const validateConfirmPassword = (value, context) =>
    value === context.password || "A confirmação deve ser igual à senha.";

  return (
    <div
      className="doca-flex doca-flex-col doca-align-center"
      style={{ height: "80%" }}
    >
      <div
        className="doca-flex doca-items-center doca-justify-center doca-p-4"
        style={{ borderBottom: "1px solid #d9e1e8" }}
      >
        <img className="doca-flex" src={amigoLogo} />
        <p className="doca-text--info doca-text--bold doca-ml-2 doca-text--large">
          CADASTRE-AI
        </p>
      </div>
      <div className="doca-page doca-flex doca-justify-center doca-p-8">
        <Card
          borderless={false}
          onClick={function noRefCheck() {}}
          variant="default"
        >
          <Card.Content>
            <div className="doca-flex doca-justify-center">
              <Text
                as="h1"
                onClick={function noRefCheck() {}}
                size="base"
                variant="primary"
                weight="medium"
              >
                Seja bem-vindo!
              </Text>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
              <div className="doca-mt-3 doca-w-80">
                <Input
                  label="Nome Completo:"
				  required
                  {...register("name", {
                    validate: "O nome é obrigatório.",
                    minLength: {
                      value: 10,
                      message: "O nome deve ter no mínimo 10 caracteres.",
                    },
					maxLength: {
						value: 40,
						message: "O nome deve ter no máximo 40 caracteres.",
					  },
                  })}
                />
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
              </div>

              <div className="doca-w-80 doca-mt-3">
                  <Input
				  label="Email:"
				  required
                  {...register("email", {
                    validate: "O email é obrigatório.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "O email deve ser válido.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>

              <div className="doca-w-80 doca-mt-3">
                <Input
                  label="Senha:"
				  required
                  type="password"
                  {...register("password", {
                    validate: "A senha é obrigatória.",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
                      message:
                        "A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula e um caractere especial.",
                    },
                  })}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>

              <div className="doca-w-80 doca-mt-3">
                <Input
                  label="Confirmar Senha:"
                  type="password"
				  require
                  {...register("confirmPassword", {
                    validate: "A confirmação de senha é obrigatória.",
                    required: (value) =>
                      validateConfirmPassword(value, {
                        password: watch("password"),
                      }),
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error-message">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="doca-flex doca-col doca-gap-2 doca-mt-2">
                <Button onClick={handleClean} size="small" variant="secondary">
                  Limpar
                </Button>
                <Button type="submit" size="small" variant="primary">
                  Salvar
                </Button>
              </div>
            </form>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default LoginForm;
