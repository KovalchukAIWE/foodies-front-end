import "./App.css";
import Button from "./components/Button/Button";
import MainTitle from "./components/MainTitle/MainTitle";
import Subtitle from "./components/Subtitle/Subtitle";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Button text="button" />
      <MainTitle text="Categories" />
      <Subtitle text="Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen." />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
