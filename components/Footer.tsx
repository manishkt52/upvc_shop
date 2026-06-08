import {
  Phone,
  Mail,
  MapPin,
  // Facebook,
  // Instagram,
  // Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer 
    id="footer"
    className="bg-gray-950 text-white">
      {/* Top */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Your Brand
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Premium aluminium windows crafted for
            modern homes with elegant design,
            durability, and performance.
          </p>

          {/* Social */}
          <div className="mt-6 flex gap-4">
            {/* <a className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600">
              <Facebook size={18} />
            </a> */}

            {/* <a className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600">
              <Instagram size={18} />
            </a> */}

            {/* <a className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600">
              <Linkedin size={18} />
            </a> */}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold">
            Contact Us
          </h3>

          <div className="mt-6 space-y-5 text-gray-300">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              +91 92110 92872
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              hello@yourbrand.com
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={40}
                className="mt-1 text-blue-400"
              />
              Nanak Piou, Plot No. 5, Block H, Gopal Nagar Extension, Najafgarh, New Delhi 110043
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-xl font-semibold">
            Visit Us
          </h3>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
            {/* <iframe
              src="https://www.google.com/maps?q=Delhi%20India&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              className="w-full"
              allowFullScreen
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.753068347709!2d76.96610487505356!3d28.60912729978561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fd02582c63f%3A0xe7ff2864779ab0cb!2sHD%20Glass%20UPVC%20%26%20Aluminium!5e0!3m2!1sen!2sin!4v1779884311012!5m2!1sen!2sin"
            width="100%" 
            height="260" 
            loading="lazy"
            className="w-full" 
            allowFullScreen 
            referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2026 HD Glass & UPVC. All rights reserved.
      </div>
    </footer>
  );
}