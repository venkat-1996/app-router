"use client";
import React, { useState } from "react";
// import ReactGA from "react-ga4";
import { event } from "../../lib/gtag";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactChange = (e) => {
    console.log(e.target.value);
    if (e.target.id === "name") setName(e.target.value);
    else if (e.target.id === "email") setEmail(e.target.value);
    else setMessage(e.target.value);
  };

  // ReactGA.initialize([
  //   {
  //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
  //   },
  // ]);

  const saveDetails = () => {
    dataLayer.push({
      event: "send_contact_details",
      name: name,
      email: email,
      message: message,
    });
    // console.log(ReactGA);
    // ReactGA.event({
    //   category: "button",
    //   action: "send_contact_details",
    //   label: "send_contact",
    // });

    // const graphqlEndpoint = 'https://graphql.contentful.com/content/v1/spaces/vekknjn8ofh7';
    // const accessToken = 'U9BPDHgdXmRprZGo9ZqfgkEOh_9Am8yU9dG5ghifv00';

    // const query = `
    // query contactListEntryQuery {
    //   contactList(id: "v4RMnXFt32EqWAXCiMecD") {
    //     name
    //     email
    //     message
    //   }
    // }
    // `;

    // fetch(graphqlEndpoint, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   body: JSON.stringify({ query }),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Response:', data))
    //   .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Name"
            onChange={(e) => handleContactChange(e)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="you@example.com"
            onChange={(e) => handleContactChange(e)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your message"
            onChange={(e) => handleContactChange(e)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => saveDetails()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
