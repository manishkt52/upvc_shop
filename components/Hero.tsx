"use client";

export default function Hero() {
  return (
    <>
    {/* <h1 className="fixed top-0 left-0 z-[999999] bg-red-500 text-white p-2">
        TEST HERO
      </h1> */}
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-10 flex min-h-screen items-center -mt-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center lg:flex-row lg:items-center">
            <div className="w-full text-center text-black lg:w-1/2 lg:text-left">
              <p className="mb-5 inline-block rounded-full border border-black/20 bg-white px-4 py-2 text-lg font-bold tracking-wide shadow-lg transition-all duration-300 sm:px-6 sm:py-3 sm:text-2xl lg:px-8 lg:text-4xl">
                HD Glass & UPVC
              </p>

              <h1 className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Open Your Home To
                <span className="mt-2 block text-4xl text-orange-500 sm:text-5xl md:text-6xl lg:text-7xl">
                  HIGH DEFINITION
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black sm:text-lg md:text-xl lg:mx-0 lg:text-2xl">
                We provide only the Best Quality & Best Service.
                <br />
                Elevate your space with
                <br />
                <span className="text-blue-600">
                  Timeless Elegance and Aesthetic Appeal.
                </span>
              </p>

              <p className="mt-6 text-sm tracking-wide text-black sm:text-base">
                Trusted by homeowners and institutions
              </p>
            </div>

            <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end lg:pl-16">
              <img
                src="/hero_1.jpeg"
                alt="UPVC Windows"
                className="w-full max-w-[320px] h-auto object-contain sm:max-w-[450px] md:max-w-[650px] lg:max-w-[1000px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Social Icons */}
      <div
        className="fixed right-6 top-[42%] z-[99999] flex -translate-y-1/2 flex-col gap-3 pointer-events-auto"
        style={{ pointerEvents: "auto" }}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
        >
          <img
            src="/social_media/Instagram.png"
            alt="Instagram"
            className="h-9 w-9 object-contain"
          />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
        >
          <img
            src="/social_media/facebook.png"
            alt="Facebook"
            className="h-9 w-9 object-contain"
          />
        </a>

        <a
          href="https://wa.me/919211092872"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
        >
          <img
            src="/social_media/whatsapp.png"
            alt="WhatsApp"
            className="h-9 w-9 object-contain"
          />
        </a>

        {/* ✅ Contact button — dispatches event caught by page.tsx */}
        <button
            onClick={() => {
              document.getElementById("footer")?.scrollIntoView({
              behavior: "smooth",
            });
        }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
        >
        <img
        src="/social_media/contact_1.png"
        alt="Call"
        className="h-9 w-9 object-contain"
      />
      </button>
      </div>
    </section>
    </>
  );
}
