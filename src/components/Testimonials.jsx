
import { Star, Quote } from "lucide-react";
import "../App.css";

const testimonials = [
    {
        name: "Alex Morgan",
        role: "Independent Artist",
        content: "The beats are incredible. The quality and sound selection perfectly match my music style.",
        initials: "AM",
        rating: 5,
    },
    {
        name: "Daniel Carter",
        role: "Hip Hop Producer",
        content: "Amazing production quality and unique sounds. These beats have taken my music to another level.",
        initials: "DC",
        rating: 5,
    },
    {
        name: "Sophia Williams",
        role: "Recording Artist",
        content: "I found exactly the sound I was looking for. Professional beats and an amazing experience.",
        initials: "SW",
        rating: 5,
    },
    {
        name: "Ryan Mitchell",
        role: "Music Creator",
        content: "The sample packs are fantastic. Great sound quality and perfect for creative music production.",
        initials: "RM",
        rating: 5,
    },
];

export default function Testimonials() {

    return (
        <section className="w-full bg-[#0D0D0D] text-white py-20 overflow-hidden">

            {/* Heading */}
            <div className="text-center px-5 mb-12">

                <div className="flex justify-center items-center gap-2 mb-4">
                    <div className="w-10 h-[4px] bg-[#8B4A52] rounded-full"></div>
                    <p className="text-[#8B4A52] font-bold text-sm uppercase tracking-widest">
                        Client Reviews
                    </p>
                    <div className="w-10 h-[4px] bg-[#8B4A52] rounded-full"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                    WHAT ARTISTS <span className="text-[#8B4A52] italic">SAY</span>
                </h2>

                <p className="text-gray-400 mt-4 text-sm sm:text-base">
                    Real experiences from artists and music creators.
                </p>

            </div>


            {/* Testimonials Marquee */}
            <div className="w-full overflow-hidden">

                <div className="testimonial-track flex w-max gap-6">

                    {[...testimonials, ...testimonials].map((testimonial, index) => (

                        <div
                            key={index}
                            className="w-[300px] sm:w-[350px] min-h-[250px] shrink-0 p-6 rounded-2xl border border-white/10 bg-[#151515] hover:border-[#8B4A52] hover:bg-[#1A1516] transition-all duration-300 flex flex-col justify-between"
                        >

                            <div>

                                <div className="flex justify-between items-start mb-5">

                                    <div className="flex items-center gap-3">

                                        <div className="w-12 h-12 rounded-full bg-[#8B4A52]/20 border border-[#8B4A52]/50 flex justify-center items-center text-[#C77B84] font-bold">
                                            {testimonial.initials}
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-white">
                                                {testimonial.name}
                                            </h3>

                                            <p className="text-gray-500 text-xs mt-1">
                                                {testimonial.role}
                                            </p>
                                        </div>

                                    </div>

                                    <Quote
                                        size={30}
                                        color="#8B4A52"
                                        fill="#8B4A52"
                                        className="opacity-70"
                                    />

                                </div>

                                <p className="text-gray-400 text-sm leading-7">
                                    "{testimonial.content}"
                                </p>

                            </div>


                            {/* Rating */}
                            <div className="flex gap-1 mt-6">

                                {[...Array(testimonial.rating)].map((_, i) => (

                                    <Star
                                        key={i}
                                        size={18}
                                        fill="#8B4A52"
                                        color="#8B4A52"
                                    />

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
