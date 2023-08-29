import React from "react";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/callToAction";

async function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;
