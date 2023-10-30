import Achievement from "./Achievement/Achievement";
import Program from "./Program/Program";
import Countdown from "./Countdown/Countdown";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Achievement />
      <Program />
      <Countdown />
    </div>
  );
}
