import "../App.css";
import { Download, MoveDown, ShoppingCart } from "lucide-react";

const storySections = [
  {
    title: "LATEST",
    highlight: "STORIES.",
    button: "EXPLORE BEATS",
    beats: [
      {
        image:
          "https://cdn.soundee.com/artwork/3a7fd37c-69e4-48df-8343-7b0170d37dfa-900x900.webp",
        name: "CHESSBOARD",
        description: "Rap Kendrick Lamar J. Cole JID",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/5a6f2cf3-6867-471f-a141-e93b0c55bc4a-900x900.webp",
        name: "HIRES AND GRAVES",
        description: "Rap Drake hiphop type beat",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/0f0a6d94-5fa8-43ca-9335-0a288b33e8f9-900x900.webp",
        name: "YOUR LOSS",
        description: "Cinematic The Weeknd",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/d5d9be7e-5b3a-4065-8b0f-2493d34c4f0c-900x900.webp",
        name: "BIG FISH",
        description: "Rap Kendrick Lamar J. Cole JID",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/bd05d067-5549-4bea-892b-27b4e2f93fcf-900x900.webp",
        name: "RUNNING LATE",
        description: "Rap J. Cole Smino Isaiah Rashad",
      },
    ],
  },

  {
    title: "DARK",
    highlight: "STORIES.",
    button: "EXPLORE ALL",
    beats: [
      {
        image:
          "https://cdn.soundee.com/artwork/0f0a6d94-5fa8-43ca-9335-0a288b33e8f9-900x900.webp",
        name: "YOUR LOSS",
        description: "Cinematic The Weeknd",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/35e05dd3-0486-46a0-b28d-45e518a0ccbf-900x900.webp",
        name: "BONES OF A KING",
        description: "Rap Kanye West NF hiphop",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/f5015a64-f121-4144-9808-4234441f2a3c-900x900.webp",
        name: "INCENDRIA",
        description: "Rap Kendrick Lamar J. Cole JID",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/9c231b07-b0b6-49a1-88c3-aff1545e2212-900x900.webp",
        name: "CHICKO CEO",
        description: "Trap 21 Savage A$AP Rocky JID",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/72f67e9a-f5f9-49e2-ae93-7840c836b9df-900x900.webp",
        name: "CRESPECULAR",
        description: "Rap Kendrick Lamar J. Cole JID",
      },
    ],
  },

  {
    title: "Drake",
    highlight: "Type Beats.",
    button: "EXPLORE ALL",
    beats: [
      {
        image:
          "https://cdn.soundee.com/artwork/5a6f2cf3-6867-471f-a141-e93b0c55bc4a-900x900.webp",
        name: "HEIRS AND GRAVES",
        description: "Rap Drake hiphop type beat",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/ea7010c3-21fd-4e8c-be26-cf08758a83d9-900x900.webp",
        name: "HALF A PROMISE",
        description: "R&B Drake Tory Lanez",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/8e979ac2-ead9-4a79-880a-b971b36ce768-900x900.webp",
        name: "SUNDAY SERVICE",
        description: "Rap Drake J. Cole hiphop",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/9bbf4a73-4d7a-4bd8-94e1-6becccf61a81-900x900.webp",
        name: "PORCELAIN",
        description: "Drill Drake Central Cee Nemzzz",
      },
      {
        image:
          "https://cdn.soundee.com/artwork/e51f3ee0-20ef-453d-905e-8a5cf8af2ce0-900x900.webp",
        name: "PRICE OF ADMIN",
        description: "Rap Drake hiphop type beat",
      },
    ],
  },
];

export default function Story() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-10 sm:py-14 lg:py-20">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-20 px-4 sm:px-8 lg:px-12 xl:px-16">
        {storySections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-8 sm:gap-10">
            {/* SECTION HEADING */}
            <div className="flex justify-between items-center gap-3">
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  {section.title}
                  <br />
                  <span className="italic text-[#8B4A52]">
                    {section.highlight}
                  </span>
                </p>
              </div>

              <button className="group flex shrink-0 gap-2 justify-center items-center bg-[#8B4A52] text-white transition-all duration-300 text-[10px] sm:text-sm font-bold tracking-wide px-3 py-3 sm:px-5 sm:py-4 hover:bg-[#A65B65] hover:scale-105 rounded-sm">
                {section.button}

                <MoveDown
                  size={18}
                  className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                />
              </button>
            </div>

            {/* BEAT CARDS */}
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
              {section.beats.map((beat, index) => (
                <div
                  key={index}
                  className="group flex flex-col gap-3 min-w-0 p-2 rounded-xl bg-[#141414] border border-white/[0.06] hover:border-[#8B4A52]/60 hover:bg-[#191516] transition-all duration-300"
                >
                  {/* IMAGE */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                    <img
                      src={beat.image}
                      alt={beat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* DETAILS */}
                  <div className="flex flex-col gap-2 px-1 pt-2">
                    <p className="text-base sm:text-lg font-bold text-white tracking-wide truncate">
                      {beat.name}
                    </p>

                    <span className="text-gray-500 text-xs sm:text-sm min-h-5">
                      {beat.description}
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-2 px-1 pb-1 mt-1">
                    <button className="flex-1 flex justify-center items-center gap-2 border border-[#8B4A52] text-white rounded-md p-2.5 text-sm font-semibold hover:bg-[#8B4A52] transition-all duration-300">
                      <ShoppingCart size={17} />$ 50.
                    </button>

                    <button className="shrink-0 flex justify-center items-center border border-[#8B4A52] text-white rounded-md p-2.5 hover:bg-[#8B4A52] transition-all duration-300">
                      <Download size={19} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
