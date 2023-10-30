import Achievement from "./Achievement/Achievement";
import Program from "./Program/Program";
import Hero from "./Hero/Hero";
import Profile from "./Profile/Profile";
import Family from "./Family/Family";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Profile />
      <Family />
      <Achievement />
      <Program />
    </div>
  );
}
