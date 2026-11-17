import "../App.css";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export default function Form() {
  return (
    <>
      <section className="w-full bg-[#0D0D0D] px-4 py-16 sm:px-8 md:py-20 lg:px-20">
        <div className="relative overflow-hidden max-w-5xl mx-auto rounded-2xl border border-[#8B4A52]/40 bg-gradient-to-br from-[#211416] via-[#151112] to-[#0D0D0D] px-5 py-12 sm:px-10 md:py-16">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#8B4A52]/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10 max-w-xl mx-auto flex flex-col justify-center items-center text-center gap-5">
            <div className="flex justify-center items-center gap-2 text-[#C77B84]">
              <Sparkles size={18} />
              <span className="text-xs sm:text-sm font-bold tracking-[3px] uppercase">
                Exclusive Updates
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight">
              Get 10% off your <br />
              <span className="italic text-[#8B4A52]">first order.</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-7 max-w-md">
              Join the list for a discount code and first word on new beats.
            </p>

            <div className="flex flex-col sm:flex-row w-full gap-3 mt-3">
              <div className="flex items-center gap-3 w-full border border-white/15 bg-white/[0.04] rounded-lg px-4 focus-within:border-[#8B4A52] transition-colors duration-300">
                <Mail size={20} className="text-gray-500 shrink-0" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full py-4 bg-transparent text-white text-sm outline-none placeholder:text-gray-500"
                />
              </div>

              <button className="flex justify-center items-center gap-2 bg-[#8B4A52] text-white px-6 py-4 rounded-lg font-bold text-sm hover:bg-[#A65B65] hover:scale-[1.02] transition-all duration-300 whitespace-nowrap">
                Sign up
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="text-gray-600 text-xs mt-2">
              No spam. Just fresh beats and exclusive offers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
