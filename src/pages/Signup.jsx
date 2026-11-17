
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Music2,
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { loginWithGoogle } from "../firebase/auth";
import API from "../api/axios";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);

      const user = await loginWithGoogle();

      toast.success(
        `Google authentication successful! Welcome ${user.displayName || "User"}`
      );

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Google Signup Error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        toast.info("Google signup cancelled.");
      } else {
        toast.error("Google signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      toast.success("Account created successfully!");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      console.error("Signup Error:", error);

      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      toast.error(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center p-4 md:p-6">

      <div className="w-full max-w-7xl min-h-[650px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex flex-col justify-between p-10 xl:p-14 overflow-hidden bg-gradient-to-br from-[#321D24] via-[#171114] to-[#0D0D0D]">

          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#8B4A52]/30 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B4A52]/20 blur-[100px] rounded-full" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#8B4A52] flex items-center justify-center">
              <Music2 size={25} />
            </div>

            <span className="text-2xl font-bold tracking-wide">
              MUSIC<span className="text-[#B66B75]">BEATS.</span>
            </span>
          </div>

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B66B75]/40 bg-[#8B4A52]/15 text-sm text-[#D99AA2] mb-7">
              <ShieldCheck size={17} />
              JOIN THE MUSIC COMMUNITY
            </div>

            <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
              Create your
              <span className="block text-[#B66B75]">
                Music Beats account.
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 max-w-md">
              Join our music community and discover your
              next favourite beat. Your journey starts here.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              {["Explore Beats", "Discover Artists", "Enjoy Music"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="flex items-center gap-4 mt-12">
              <div className="w-12 h-12 rounded-full bg-[#8B4A52]/30 flex items-center justify-center">
                <Headphones size={23} className="text-[#D99AA2]" />
              </div>

              <div>
                <p className="font-semibold">Discover your sound.</p>
                <p className="text-sm text-gray-400">
                  Be part of the Music Beats community.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between text-sm text-gray-400">
            <p>© 2026 Music Beats</p>
            <p>All systems secure</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#141414] flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <div className="w-full max-w-xl">

            <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <Music2 className="text-[#B66B75]" size={30} />
              <span className="text-2xl font-bold">
                MUSIC<span className="text-[#B66B75]">BEATS.</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B4A52]/15 text-[#D99AA2] text-xs font-bold tracking-wider mb-5">
              <ShieldCheck size={15} />
              CREATE ACCOUNT
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Create your account
            </h2>

            <p className="text-gray-400 mb-7">
              Join Music Beats and get started.
            </p>

            {/* GOOGLE SIGNUP */}
            <button
              type="button"
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-all font-semibold disabled:opacity-50"
            >
              <span className="text-xl font-bold">G</span>
              {loading ? "Please wait..." : "Continue with Google"}
            </button>

            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>

                <div className="flex items-center gap-3 border border-white/15 rounded-lg px-4 bg-[#0D0D0D] focus-within:border-[#B66B75]">
                  <UserRound size={19} className="text-[#B66B75]" />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full py-3.5 bg-transparent outline-none text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <div className="flex items-center gap-3 border border-white/15 rounded-lg px-4 bg-[#0D0D0D] focus-within:border-[#B66B75]">
                  <Mail size={19} className="text-[#B66B75]" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full py-3.5 bg-transparent outline-none text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>

                  <div className="flex items-center gap-2 border border-white/15 rounded-lg px-3 bg-[#0D0D0D] focus-within:border-[#B66B75]">
                    <Lock size={18} className="text-[#B66B75] shrink-0" />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create password"
                      required
                      minLength={6}
                      className="w-full min-w-0 py-3.5 bg-transparent outline-none text-white placeholder:text-gray-500"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>

                  <div className="flex items-center gap-2 border border-white/15 rounded-lg px-3 bg-[#0D0D0D] focus-within:border-[#B66B75]">
                    <Lock size={18} className="text-[#B66B75] shrink-0" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      required
                      minLength={6}
                      className="w-full min-w-0 py-3.5 bg-transparent outline-none text-white placeholder:text-gray-500"
                    />

                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

              </div>

              <label className="flex items-start gap-2 text-sm text-gray-400">
                <input
                  type="checkbox"
                  required
                  className="accent-[#8B4A52] mt-1"
                />

                <span>
                  I agree to the{" "}
                  <span className="text-[#D99AA2]">Terms & Conditions</span>
                  {" "}and{" "}
                  <span className="text-[#D99AA2]">Privacy Policy</span>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-lg bg-[#8B4A52] hover:bg-[#A65B65] transition-all font-bold disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Account"}
                {!loading && <ArrowRight size={20} />}
              </button>

            </form>

            <p className="text-center text-gray-400 mt-7 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#D99AA2] font-bold hover:text-white"
              >
                Sign in
              </Link>
            </p>

            <div className="border-t border-white/10 mt-6 pt-5 flex justify-center items-center gap-2 text-sm text-gray-500">
              <ShieldCheck size={17} className="text-[#B66B75]" />
              Your account security matters to us.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
