"use client";

import Image from "next/image";

const products = [
  {
    title: "Sliding",
    image: "/products/slide.jpeg",
    description:
    "Space-saving horizontal sliders delivering smooth operation, abundant daylight, and clean modern aesthetics."
  },
  {
    title: "Casement Doors",
    image: "/products/casement.jpeg",
    description:
    "Side-hinged for maximum ventilation, unobstructed views, and an airtight, secure seal always."
  },
  {
    title: "Slide & Fold",
    image: "/products/slide_fold.jpeg",
    description:
    "Multi-panel folding system creating wide, seamless openings for perfect indoor-outdoor living connectivity."
  },
  {
    title: "Lift & Slide",
    image: "/products/lift_slide.jpeg",
    description:
    "Effortlessly gliding large panels that ensure smooth operation, superior insulation, and expansive views."
  },
  {
    title: "Awning Windows",
    image: "/products/awning.jpeg",
    description:
    "Top-hinged elegance that delivers fresh ventilation, weather protection, and superior energy efficiency."
  },
  {
    title: "Corner Slider",
    image: "/products/corner_slide.jpeg",
    description:
    "Seamlessly merging corners for breathtaking views, enhanced airflow, and striking architectural aesthetics."
  },
  {
    title: "Low threshold Slider",
    image: "/products/low_threshold.jpeg",
    description:
    "Barrier-free, minimal threshold design enabling seamless indoor-outdoor transitions and enhanced accessibility."
  },
  {
    title: "Tilt & Turn",
    image: "/products/tilt_turn.jpeg",
    description:
    "Dual-function versatility — secure ventilation, effortless cleaning, and outstanding thermal insulation performance."
  },
  {
    title: "French Windows",
    image: "/products/french.jpeg",
    description:
    "WindowsTimeless dual-sash design offering wide openings, classic elegance, and effortless natural ventilation."
  },
  {
    title: "Villa Windows",
    image: "/products/villa_windows.jpeg",
    description:
    "Premium luxury windows combining grand architectural elegance, lasting durability, and exceptional performance always."
  },
  {
    title: "Bay Windows",
    image: "/products/bay.jpeg",
    description:
    "Projecting beautifully outward, creating panoramic views, spacious interiors, and abundant natural light."
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
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">
            {/* Product Range */}
          </span>

          {/* <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-6xl"> */}
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-6xl">
            Products Ranges
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-2xl text-gray-600">
            Discover beautifully engineered uPVC doors & windows crafted
            for modern homes and luxury living, <span className="text-orange-500">Specially customized for you.</span>
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
                <div className="relative h-[280px] w-full overflow-hidden bg-white p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="350px"
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}