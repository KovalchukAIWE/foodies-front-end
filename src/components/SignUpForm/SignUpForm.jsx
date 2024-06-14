import { useForm } from "react-hook-form";
import { FormButton } from "../Buttons/Buttons";

const SignUpForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        <p>{errors.name && errors.name.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        <p>{errors.email && errors.email.message}</p>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <p>{errors.password && errors.password.message}</p>
      </div>
      <FormButton text="sign up" />
    </form>
  );
};

export default SignUpForm;
