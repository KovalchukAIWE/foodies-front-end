import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormButton } from "../Buttons/Buttons";
import styles from "./SignUpForm.module.css";

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
            <input
              className={styles.signUpFormInput}
              type="password"
              placeholder="Password"
              {...register("password")}
            />
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
