import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./SignInForm.module.css";
import { useState } from "react";
import { FormButton } from "../Buttons/Buttons";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={styles.signInForm}>
      <div className={styles.signInFormContent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signInFormGroup}>
            <input
              className={styles.signInFormInput}
              type="email"
              placeholder="Email*"
              {...register("email")}
            />
            <p className={styles.signInFormError}>
              {errors.email && errors.email.message}
            </p>
          </div>

          <div className={styles.signInFormGroup}>
            <div className={styles.passwordContainer}>
              <input
                className={styles.signInFormInput}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
              />
              <svg
                className={styles.passwordToggleIcon}
                onClick={togglePasswordVisibility}
              >
                <use
                  href={`${sprite}#${
                    showPassword ? "eye-open" : "eye-private"
                  }`}
                />
              </svg>
            </div>
            <p className={styles.signInFormError}>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className={styles.signInFormButton}>
            <FormButton text="Sign in" disabled={!isValid} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
