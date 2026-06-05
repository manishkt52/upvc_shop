"use client";

import Image from "next/image";

const products = [
  {
    title: "Sliding Doors",
    image: "/img_1.jpg",
  },
  {
    title: "Casement Doors",
    image: "/img_2.webp",
  },
  {
    title: "French Doors",
    image: "/img_3.jpg",
  },
  {
    title: "Lift & Slide Doors",
    image: "/img_2.webp",
  },
];

export default function Products() {
  const marqueeProducts = [...products, ...products];

  return (
    <section className="bg-white py-10">
      {/* <div className="mx-auto max-w-7xl px-6"> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        {/* <div className="mb-14 text-center"> */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">
            Product Range
          </span>

          {/* <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-6xl"> */}
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-6xl">
            Premium UPVC Doors
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Discover beautifully engineered UPVC doors crafted
            for modern homes and luxury living.
          </p>
        </div>

        {/* Marquee Carousel */}
        <div className="overflow-hidden">
          <div className="marquee">
            {marqueeProducts.map((product, index) => (
              <div
                key={index}
                // className="group w-[350px] flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:shadow-2xl"
                className="group w-[350px] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-50 border border-gray-200 transition duration-300"
              >
                <div className="relative h-[280px] w-full overflow-hidden bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="350px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Premium quality UPVC doors designed for
                    security, durability and modern aesthetics.
                  </p>

                  <button className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600">
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}