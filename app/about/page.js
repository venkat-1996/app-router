import React from "react";
import { BASE_URL } from "@/constant/url";
import { about_query } from "@/graphql/about";

export const metadata = {
  title: "About Page",
  description: "Generated by create next app",
};

const aboutData = async () => {
  const response = await fetch(
    `${BASE_URL}${process.env.GRAPHQL_SPACES}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GRAPHQL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ about_query }),
    }
  );
  const data = await response.json();
  return data;
};

async function About() {
  const aboutInfo = await aboutData();
  console.log("aboutInfo", aboutInfo);

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white">
      <div className="flex lg:flex-row justify-between">
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
