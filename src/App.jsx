import "./App.css";
import Button from "./components/Button/Button";
import MainTitle from "./components/MainTitle/MainTitle";
import Subtitle from "./components/Subtitle/Subtitle";

function App() {
  return (
    <>
      <Button text="button" />
      <MainTitle text="Categories" />
      <Subtitle text="Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen." />
    </>
  );
}

export default App;
