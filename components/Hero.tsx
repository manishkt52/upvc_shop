"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/55 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          {/* Right side */}
          <div className="ml-auto max-w-2xl text-right text-white">
            {/* Tagline */}
            <p className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide backdrop-blur-sm">
              HD Glass UPVC & Aluminium
            </p>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Open Your Home To
              <span className="mt-2 block text-blue-300">
                More Light. More Space.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 ml-auto max-w-xl text-base leading-8 text-gray-200 md:text-lg">
              Elevate your living experience with
              beautifully crafted aluminium
              windows that bring in natural
              light, reduce outside noise, and
              add timeless elegance to every
              room.
            </p>

            {/* Trust text */}
            <p className="mt-8 text-sm tracking-wide text-gray-300">
              Trusted by homeowners across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}