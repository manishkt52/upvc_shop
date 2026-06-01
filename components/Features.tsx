import Image from "next/image";

import {
  Volume2,
  ShieldCheck,
  CloudRain,
  Zap,
  Wind,
  LayoutGrid,
} from "lucide-react";

const features = [
  {
    title: "Noise Insulation",
    icon: Volume2,
    image: "/features/noise.jpg",
  },
  {
    title: "Dust Proof",
    icon: Wind,
    image: "/features/dust.jpg",
  },
  {
    title: "Weather Resistant",
    icon: CloudRain,
    image: "/features/weather.jpg",
  },
  {
    title: "Energy Efficient",
    icon: Zap,
    image: "/features/energy.jpg",
  },
  {
    title: "Enhanced Security",
    icon: ShieldCheck,
    image: "/features/security.jpg",
  },
  {
    title: "Minimal Design",
    icon: LayoutGrid,
    image: "/features/design.jpg",
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Windows That Do More
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Beautifully crafted aluminium windows
            designed for performance and modern
            living.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Background image */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Icon + title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-white">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md transition duration-300 group-hover:bg-blue-600">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}