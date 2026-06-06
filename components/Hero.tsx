"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* <source
          src="/hero-video.mp4"
          type="video/mp4"
        /> */}
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center -mt-8">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          {/* Left side */}
          <div className="max-w-2xl text-left text-white">
            {/* Tagline */}
            {/* <p className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide backdrop-blur-sm"> */}
            <p className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-8 py-3 text-4xl font-medium tracking-wide backdrop-blur-sm">
              HD Glass & UPVC
            </p>

            {/* Heading */}
            <h1 className="text-2xl font-bold leading-tight whitespace-nowrap md:text-4xl lg:text-5xl">
              Open Your Home To
              <span className="mt-2 block text-7xl text-orange-800">
                {/* More Light. More Space. */}
                HIGH DEFINITION
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-200 md:text-2xl">
              We provide only the best quality.<br />
              Elevate your space with <br />
              Timeless Elegance and Aesthetic Appeal
            </p>

            {/* Trust text */}
            <p className="mt-8 text-base tracking-wide text-gray-300"><br />
              Trusted by homeowners and institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}