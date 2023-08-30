"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { cardItemsAction } from "@/redux/reducer/cardItemsReducer";

function Testimonials({ cardItems }) {
  /* Use Selector */
  const cardsList = useSelector((state) => state.cardsKey.cardsList);

  /* Use Dispatch */
  const dispatch = useDispatch();

  /* Save to store */
  dispatch(cardItemsAction.cardsList(cardItems.documents));

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Cards
        </h2>
        <div className="flex flex-wrap">
          {cardsList.map((item, i) => (
            <Link
              href={`/home/${item.$id}`}
              className="w-full md:w-1/3 px-2 mb-4"
              key={i}
            >
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  {item.cardDesc}
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  {item.cardAuthor}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
