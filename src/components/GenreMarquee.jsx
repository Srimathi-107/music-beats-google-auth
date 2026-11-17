
import { Star } from "lucide-react";
import "../App.css";

const genres = [
    "AMBIENT",
    "RAP",
    "TRAP",
    "CINEMATIC",
    "HOUSE",
];

export default function GenreMarquee() {

    return (
        <div className="w-full overflow-hidden py-5 border-y border-gray-800">

            <div className="genre-track flex items-center w-max">

                {[...genres, ...genres, ...genres].map((genre, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-5 sm:gap-8 px-5 sm:px-8"
                    >

                        <span className="text-white text-xl sm:text-2xl lg:text-xl font-extrabold tracking-wider whitespace-nowrap">
                            {genre}
                        </span>

                        <Star
                            size={22}
                            fill="#8B4A52"
                            color="#8B4A52"
                            className="shrink-0 sm:w-7 sm:h-7"
                        />

                    </div>
                ))}

            </div>

        </div>
    );
}
