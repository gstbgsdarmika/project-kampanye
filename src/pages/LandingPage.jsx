import React, { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import Footer from "../components/Footer";
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
import Comment from "./Comment/Comment";
import MusicBS from "../components/MusicBS";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Profile />
      <MusicBS />
      <Family />
      <Navigation />
      <Program />
      <Blog />
      <Countdown />
      <Gallery />
      <Discussion />
      <Testimonials />
      <Comment />
      <Footer />
    </div>
  );
}
