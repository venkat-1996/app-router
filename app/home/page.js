import React from "react";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/callToAction";
import { service } from "@/services";

const homeData = async () => {
  const response = await service.listDocuments("64ee1767eb40105ac3b8");
  return response;
};

const cardData = async () => {
  const response = await service.listDocuments("64ee191eece2883d698d");
  return response;
};

async function Home() {
  const homeInfo = await homeData();
  const cardItems = await cardData();

  return (
    <>
      <Hero homeInfo={homeInfo} />
      <Testimonials cardItems={cardItems} />
      <CallToAction homeInfo={homeInfo} />
    </>
  );
}

export default Home;
