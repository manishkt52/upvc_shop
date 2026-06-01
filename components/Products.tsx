import Image from "next/image";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Sliding Windows",
    image: "/img_1.jpg",
    desc: "Smooth, space-saving designs with wide glass panels for more light and better views.",
  },
  {
    title: "Casement Windows",
    image: "/img_2.webp",
    desc: "Classic side-opening windows designed for ventilation, comfort, and elegant styling.",
  },
];

export default function Products() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Collection
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Premium Window Range
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Discover beautifully engineered aluminium windows
            crafted for modern homes and premium living.
          </p>
        </div>

        {/* Products */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.desc}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                  Explore More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}