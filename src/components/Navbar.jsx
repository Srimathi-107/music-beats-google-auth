
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  ShoppingCart,
  UserRound,
  Search,
  MenuIcon,
  X,
  LogOut,
} from "lucide-react";
import { toast } from "react-toastify";
import { logoutUser } from "../firebase/auth";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  const navigate = useNavigate();

  const handleLogin = () => {
    setSidebar(false);
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await logoutUser();

      setIsLoggedIn(false);
      setSidebar(false);

      toast.success("Logged out successfully!");

      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex z-[99999] justify-around items-center gap-5 h-[70px] fixed w-[100%] bg-[#0D0D0D] text-[#FFFFFFb8]">
        <div className="flex gap-1 justify-center items-center">
          <img
            src="https://framerusercontent.com/images/0j0FEMCUPWMXecJLP6wz3FJNzZ4.png?scale-down-to=512&width=732&height=701"
            alt=""
            width={"50px"}
            height={"30px"}
          />
          <h1 className="text-lg font-bold">LOGO</h1>
        </div>

        <ul className="flex gap-5 justify-center items-center text-sm">
          <li className="hover:text-[#8B4A52] font-bold">BEATS</li>
          <li className="hover:text-[#8B4A52] font-bold">EXCLUSIVE BEATS</li>
          <li className="hover:text-[#8B4A52] font-bold">SAMPLE PACKS</li>
          <li className="hover:text-[#8B4A52] font-bold">ABOUT</li>
          <li className="hover:text-[#8B4A52] font-bold">SERVICES</li>
          <li className="hover:text-[#8B4A52] font-bold">PRICING</li>
          <li className="hover:text-[#8B4A52] font-bold">CONTACT</li>
        </ul>

        <div className="flex gap-5 justify-center items-center">
          <Search
            size={24}
            className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
          />

          <ShoppingCart
            size={24}
            className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
          />

          {isLoggedIn ? (
            <LogOut
              size={24}
              onClick={handleLogout}
              className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
            />
          ) : (
            <UserRound
              size={24}
              onClick={handleLogin}
              className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
            />
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden z-[99999] p-4 justify-between items-center gap-5 h-[70px] fixed w-[100%] bg-[#0D0D0D] text-[#FFFFFFb8]">
        <div className="flex gap-2 justify-center items-center">
          <MenuIcon
            size={24}
            className="cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          />

          <img
            src="https://framerusercontent.com/images/0j0FEMCUPWMXecJLP6wz3FJNzZ4.png?scale-down-to=512&width=732&height=701"
            alt=""
            width={"50px"}
            height={"30px"}
          />
        </div>

        <div
          className={`flex flex-col items-baseline p-6 gap-2 fixed top-0 left-0 h-screen w-full bg-[#0D0D0D] transition-transform duration-500 ease-in-out ${
            sidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full p-2 flex justify-end">
            <X
              size={40}
              className="cursor-pointer hover:rotate-180 transition-transform duration-500"
              onClick={() => setSidebar(false)}
            />
          </div>

          <ul className="w-full flex flex-col gap-5 justify-center h-full text-sm">
            <li className="hover:translate-x-[3px] font-bold hover:text-[#8B4A52]">
              BEATS
            </li>
            <li className="hover:translate-x-[3px] font-bold hover:text-[#8B4A52]">
              EXCLUSIVE BEATS
            </li>
            <li className="hover:translate-x-[3px] font-bold hover:text-[#8B4A52]">
              SAMPLE PACKS
            </li>
            <li className="hover:translate-x-[3px] font-bold hover:text-[#8B4A52]">
              ABOUT
            </li>
            <li className="hover:translate-x-[3px] font-bold hover:text-[#8B4A52]">
              SERVICES
            </li>
            <li className="hover:translate-x-[3px] font-bold hover:text-[#8B4A52]">
              PRICING
            </li>
            <li className="hover:translate-x-[3px] font-bold hover:text-[#8B4A52]">
              CONTACT
            </li>
          </ul>
        </div>

        <div className="flex gap-6 justify-center items-center">
          <Search
            size={24}
            className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
          />

          <ShoppingCart
            size={24}
            className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
          />

          {isLoggedIn ? (
            <LogOut
              size={24}
              onClick={handleLogout}
              className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
            />
          ) : (
            <UserRound
              size={24}
              onClick={handleLogin}
              className="cursor-pointer hover:translate-y-[-3px] hover:text-[#8B4A52]"
            />
          )}
        </div>
      </div>
    </>
  );
}
