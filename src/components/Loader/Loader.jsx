import ReactDOM from "react-dom";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return ReactDOM.createPortal(
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#050505D9"
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />,
    document.getElementById("modal")
  );
};

export default Loader;
