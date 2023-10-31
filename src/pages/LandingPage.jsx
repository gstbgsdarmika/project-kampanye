import { NavbarSimple } from "../components/Navigation";
import Achievement from "./Achievement/Achievement";
import Program from "./Program/Program";
import Hero from "./Hero/Hero";
import Profile from "./Profile/Profile";
import Family from "./Family/Family";
import Countdown from "./Countdown/Countdown";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";
import Gallery from "./Gallery/Gallery";
import Discussion from "./Discussion/Discussion";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Profile />
      <Family />
      <NavbarSimple />
      <Achievement />
      <Program />
      <Blog />
      <Countdown />
      <Gallery />
      <Discussion />
      <Testimonials />
    </div>
  );
}
