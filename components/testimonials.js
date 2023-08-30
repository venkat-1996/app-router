import React from "react";

function Testimonials({ cardItems }) {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Cards
        </h2>
        <div className="flex flex-wrap">
          {cardItems.documents.map((item, id) => (
            <div className="w-full md:w-1/3 px-2 mb-4" key={id}>
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  {item.cardDesc}
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  {item.cardAuthor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
