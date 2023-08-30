"use client";
import React, { useState } from "react";
import { googleAnalytics } from "@/googleAnalytics";
import { createDocument } from "@/services";
import { service } from "@/services";

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

  const saveDetails = () => {
    service.createDocument(
      "64ed9a61178ef9013e5d",
      "64ed9ac51f946e251bb0",
      "64edc6bd2add40ed838c",
      {
        name: name,
        email: email,
        message: message,
      }
    );
    googleAnalytics("send_contact_details", {
      data: {
        name: name,
        email: email,
        message: message,
      },
    });
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
