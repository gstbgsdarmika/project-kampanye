import { NavbarSimple } from "../components/Navigation";
import Achievement from "./Achievement/Achievement";
import Program from "./Program/Program";
import Hero from "./Hero/Hero";
import Profile from "./Profile/Profile";
import Family from "./Family/Family";
import Countdown from "./Countdown/Countdown";
import Testimonials from "./Testimonials/Testimonials";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Profile />
      <Family />
      <NavbarSimple />
      <Achievement />
      <Program />
      <Countdown />
      <Testimonials />
    </div>
  );
}
