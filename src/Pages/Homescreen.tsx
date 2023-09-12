import { Home } from "./Home";
import About from "./About";
import Features from "./Features";
import Services from "./Services";
import Blog from "./Blog";
import Card from "./Card";

export const Homescreen = () => {
  return (
    <div>
      <Home />
      <About />
      {/* <Services /> */}
      {/* <Features /> */}
      <Blog />
    </div>
  );
};
