
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";
import Form from "./components/Form";
import GenreMarquee from "./components/GenreMarquee";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0D0D0D] text-white">
        <Hero />
        <GenreMarquee />
        <Story />
        <Testimonials />
        <Form />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <>
    <ToastContainer
  position="top-right"
  autoClose={3000}
  theme="dark"
  style={{ zIndex: 999999 }}
/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
