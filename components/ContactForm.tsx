"use client";

import { useState } from "react";

import {
  User,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const text = `
Name: ${name}
Phone: ${phone}
Requirement: ${message}
`;

    window.open(
      `https://wa.me/8826582733?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden py-10 text-white"
      style={{
          backgroundImage: "url('/contact_image.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPositionX: "0%",
          backgroundPositionY: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Book Your Free
              <span className="block text-blue-300">
                Consultation Today
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
              Let our experts help you choose the
              perfect aluminium windows for your
              home.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl backdrop-blur-sm">
            <form
              action="https://formsubmit.co/manishkt52@gmail.com"
              method="POST"
              className="grid gap-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Window Enquiry"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              {/* Name */}
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 text-gray-900 outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 text-gray-900 outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-5 text-gray-400"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirement"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 text-gray-900 outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 hover:shadow-lg"
                >
                  Submit Enquiry
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
                >
                  WhatsApp Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}