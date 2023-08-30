import React from "react";
import CardInfo from "@/components/cardInfo";
import { service } from "@/services";

export async function generateStaticParams() {
  return [
    { id: "64ee195d3f9d43c27711" },
    { id: "64ee197209f8a21dedff" },
    { id: "64ee19808dfb54a503c6" },
  ];
}

export const revalidate = 10;

const cardDetails = async (id) => {
  const response = await service.getDocument("64ee191eece2883d698d", id);
  return response;
};

async function CardDeails({ params: { cards } }) {
  const cardInfo = await cardDetails(cards[0]);

  return <CardInfo cardInfo={cardInfo} />;
}

export default CardDeails;
