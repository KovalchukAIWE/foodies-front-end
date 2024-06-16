import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormButton } from "../Buttons/Buttons";
import styles from "./SignUpForm.module.css";
import { useState } from "react";
import sprite from "../../assets/img/icons-sprite.svg";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUpForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={styles.signUpForm}>
      <div className={styles.signUpFormContent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signUpFormGroup}>
            <input
              className={styles.signUpFormInput}
              type="text"
              placeholder="Name*"
              {...register("name")}
            />
            <p className={styles.signUpFormError}>
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className={styles.signUpFormGroup}>
            <input
              className={styles.signUpFormInput}
              type="email"
              placeholder="Email*"
              {...register("email")}
            />
            <p className={styles.signUpFormError}>
              {errors.email && errors.email.message}
            </p>
          </div>

          <div className={styles.signUpFormGroup}>
            <div className={styles.passwordContainer}>
              <input
                className={styles.signUpFormInput}
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
            <p className={styles.signUpFormError}>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className={styles.signUpFormButton}>
            <FormButton text="Create" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
