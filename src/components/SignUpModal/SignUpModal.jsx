import SignUpForm from "../SignUpForm/SignUpForm";

const SignUpModal = ({ onClose }) => {
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    onClose();
  };

  return (
    <div>
      <h2>Sign Up Modal</h2>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpModal;
