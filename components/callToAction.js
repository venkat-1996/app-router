import Link from "next/link";
import React from "react";

function CallToAction({ homeInfo }) {
  return (
    <section className="bg-[#667eea]">
      <div className="container mx-auto px-6 text-center py-20">
        <h2 className="mb-6 text-4xl font-bold text-center text-white">
          {homeInfo.documents[0]?.ctaTitle || ""}
        </h2>
        <h3 className="my-4 text-2xl text-white">
          {homeInfo.documents[0]?.ctaDesc || ""}
        </h3>
        <Link href={homeInfo.documents[0]?.ctaBtn || "/"}>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
