import React from "react";

function Footer({ footerInfo }) {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          {footerInfo.documents.map((linkMain, id) => (
            <div className="w-full md:w-1/4 text-center md:text-left" key={id}>
              <h5 className="uppercase mb-6 font-bold">{linkMain.title}</h5>
              <ul className="mb-4">
                {linkMain.linkItems.map((linkSub, id) => (
                  <li className="mt-2" key={id}>
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      {linkSub}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
