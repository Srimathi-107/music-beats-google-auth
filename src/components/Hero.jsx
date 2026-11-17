
import "../App.css"
import { ArrowDown, Play, MoveDown } from "lucide-react";

export default function Hero(){

    return(
        <>
            <div className="w-full min-h-screen pt-28 lg:pt-20 gap-16 lg:gap-0 flex flex-col lg:flex-row justify-around items-center p-5 sm:p-[30px] lg:p-0">

                <div className="w-full lg:w-[50%] text-white flex justify-baseline items-baseline gap-5 flex-col border-b-gray-500 md:p-[20px] lg:p-20">

                    <div className="flex justify-center items-center gap-2 text-white">
                        <div className="w-[50px] h-[5px] bg-[#8B4A52] rounded-lg"></div>
                        <p className="font-bold text-sm sm:text-base">Original music production</p>
                    </div>

                    <p className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl w-full leading-tight">
                        BEATS THAT TELL A <span className="text-[#8B4A52] italic">STORY</span>
                    </p>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                        Discover original beats, sample packs and production services crafted for artists and creators worldwide.
                    </p>

                    <div className="w-full flex flex-wrap justify-baseline items-center gap-3 sm:gap-4 pb-2">

                        <button className="flex gap-2 justify-center items-center bg-[#8B4A52] text-white hover:scale-105 transition-transform duration-300 text-xs sm:text-sm p-3 sm:p-4 rounded-sm">
                            EXPLORE BEATS
                            <MoveDown size={20} className="-rotate-40"/>
                        </button>

                        <button className="bg-[#FFFFFF0F] text-white hover:bg-white/30 transition-colors duration-300 text-xs sm:text-sm p-3 sm:p-4 rounded-sm flex gap-2 justify-center items-center">
                            <Play size={20}/>
                            PLAY LATEST
                        </button>

                    </div>

                    <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-5 pt-5 border-t border-gray-700">

                        <p className="flex flex-col gap-1">
                            <span className="text-xl sm:text-2xl font-extrabold">3,168</span>
                            <span className="text-gray-400 font-bold text-xs sm:text-sm">ORGINAL BEATS</span>
                        </p>

                        <p className="flex flex-col gap-1">
                            <span className="text-xl sm:text-2xl font-extrabold">421K+</span>
                            <span className="text-gray-400 font-bold text-xs sm:text-sm">SOUNDEE PLAYS</span>
                        </p>

                        <p className="flex flex-col gap-1">
                            <span className="text-xl sm:text-2xl font-extrabold">Top</span>
                            <span className="text-gray-400 font-bold text-xs sm:text-sm">VERIFIED PLAY</span>
                        </p>

                    </div>
                </div>


                <div className="relative w-[90%] sm:w-[75%] lg:w-[30%] h-[280px] sm:h-[400px] lg:h-[500px] lg:m-10 lg:mt-30 border border-gray-700">

                    <div className="absolute top-[-35px] lg:top-[-70px] left-0 w-full flex justify-between items-center">
                        <span className="text-gray-500 font-bold text-xs sm:text-sm">LATEST DROP</span>
                        <span className="text-gray-500 font-bold text-xs sm:text-sm">2MO AGO</span>
                    </div>

                    <div className="w-full h-full absolute z-[3] lg:right-[30px] lg:bottom-[30px]">
                        <img
                            src="https://framerusercontent.com/images/lnHryud6muXRpn4MYATNnAn55yo.webp?width=900&height=900"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="hidden md:flex absolute z-[5] left-[-35px] lg:left-[-70px] top-[30px] lg:top-[50px] border-4 border-black -rotate-10">
                        <img
                            src="https://framerusercontent.com/images/PzAvTSfW3a7o8X00cgk5lQ9Ga84.webp?scale-down-to=512&width=900&height=900"
                            alt=""
                            className="w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] object-cover"
                        />
                    </div>

                    <div className="hidden md:flex absolute z-[5] lg:bottom-[70px] lg:right-[-30px] bottom-[50px] right-[-40px] border-4 border-black rotate-10">
                        <img
                            src="https://framerusercontent.com/images/c9ey8GAvnThUzCa4OzgpRJuEDg.webp?scale-down-to=512&width=900&height=900"
                            alt=""
                            className="w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] object-cover"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}
