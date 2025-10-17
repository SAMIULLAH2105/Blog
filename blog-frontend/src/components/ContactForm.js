import { Mail, Phone, Clock } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-gradient-to-r from-[#2b2d61] to-[#3b3a8f] px-16 md:px-22 lg:px-35 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Contact Info */}
        <div className="text-left">
          <div className="flex">
            <div className="w-[4px] h-[23px] bg-amber-300"></div>
            <span className=" h-[23px] inline-block px-2 py-1 bg-white/35 text-black text-xs font-semibold  mb-4">
              Contact
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3 text-amber-50">
            Get in touch with us
          </h2>

          <p className="text-sm text-gray-200 mb-6 max-w-md">
            9th Mile Karsaz, Main Shahrah-e-Faisal, Karachi-75350, Pakistan
          </p>

          <ul className="space-y-4 text-gray-200">
            {/* Email */}
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#151633] flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-300">Email</div>
                <div className="text-sm">info@kwsc.gov.pk</div>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <div className="w-10 h-10  rounded-full bg-[#151633] flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-300">Call Us</div>
                <div className="text-sm">(+92) 021 111 997 200</div>
              </div>
            </li>

            {/* Working Hours */}
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#151633] flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-300">Hours</div>
                <div className="text-sm">Mon – Fri : 9:00 am – 5:00 pm</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <div>
          <form className="space-y-4  p-6 rounded-md ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name*"
                className="bg-transparent border border-white/30 px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="bg-transparent border border-white/30 px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="bg-transparent border border-white/30 px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-white/30 px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="w-full bg-transparent border border-white/30 px-3 py-3 text-white placeholder-gray-300 min-h-[120px] focus:outline-none focus:border-yellow-400"
            />

            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FFB629] to-[#FFDA56] text-black font-semibold px-5 py-2 rounded shadow-sm hover:bg-yellow-300"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
