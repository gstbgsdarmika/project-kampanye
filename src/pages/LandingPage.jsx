import { NavbarSimple } from "../components/Navigation";
import Achievement from "./Achievement/Achievement";
import Program from "./Program/Program";
import Countdown from "./Countdown/Countdown";
import Testimonials from "./Testimonials/Testimonials";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <NavbarSimple />
      <Achievement />
      <Program />
      <Countdown />
      <Testimonials />
    </div>
  );
}
