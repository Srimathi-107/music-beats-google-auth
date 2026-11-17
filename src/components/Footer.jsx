import "../App.css";

import { ArrowUpRight, Music2, ArrowUp } from "lucide-react";

import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white px-5 sm:px-8 lg:px-16 pt-16 pb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col gap-5 w-full lg:w-[30%]">
          <div className="flex items-center gap-3">
            <img
              src="https://framerusercontent.com/images/0j0FEMCUPWMXecJLP6wz3FJNzZ4.png?scale-down-to=512&width=732&height=701"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />

            <h1 className="text-xl font-bold tracking-wider">LOGO</h1>
          </div>

          <p className="text-gray-400 text-sm leading-7 max-w-xs">
            Creating sounds that inspire. Discover premium beats and unique
            music for your next project.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-[#8B4A52] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-[#8B4A52] hover:text-white transition-all duration-300"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href="#"
              aria-label="Music"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-[#8B4A52] hover:text-white transition-all duration-300"
            >
              <Music2 size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full sm:w-auto">
          <h2 className="text-lg font-semibold">Explore</h2>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-[#C47A83] transition">
              Home
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              Beats
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              About Us
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full sm:w-auto">
          <h2 className="text-lg font-semibold">Legal</h2>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-[#C47A83] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              License
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              Refund Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full sm:w-auto">
          <h2 className="text-lg font-semibold">Connect</h2>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <a
              href="mailto:hello@example.com"
              className="hover:text-[#C47A83] transition"
            >
              Email Us
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              Instagram
            </a>
            <a href="#" className="hover:text-[#C47A83] transition">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-14 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            © 2026 Your Logo. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C47A83] transition"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
