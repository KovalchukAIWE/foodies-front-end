import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormButton } from "../Buttons/Buttons";
import styles from "./SignInForm.module.css";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignInForm = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission here (e.g., send data to server)
    console.log(data);
    onClose();
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
            <input
              className={styles.signInFormInput}
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className={styles.signInFormError}>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className={styles.signInFormButton}>
            <FormButton text="Sign in" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
