"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          hasScrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="relative flex h-24 items-center justify-between px-6 lg:px-10">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="group relative z-50 flex h-12 w-12 flex-col items-center justify-center gap-1.5"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span
              className={`block h-px w-7 bg-white transition-all duration-300 group-hover:bg-[#D4AF37] ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-7 bg-white transition-all duration-300 group-hover:bg-[#D4AF37] ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-7 bg-white transition-all duration-300 group-hover:bg-[#D4AF37] ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>


          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/logo_modern_transparent.png"
              alt="Company Logo"
              className="h-24 w-auto"
            />
          </div>


          {/* Contact Us */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="relative z-50 border border-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] sm:text-sm"
          >
            Contact Us
          </a>

        </div>
      </nav>


      {/* =========================================================
          FULL SCREEN MENU
      ========================================================= */}

      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        <div className="flex h-full items-center justify-center">

          <div className="flex flex-col items-center gap-8 text-center">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light tracking-wide transition-colors duration-300 hover:text-[#D4AF37] sm:text-5xl lg:text-6xl"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light tracking-wide transition-colors duration-300 hover:text-[#D4AF37] sm:text-5xl lg:text-6xl"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light tracking-wide transition-colors duration-300 hover:text-[#D4AF37] sm:text-5xl lg:text-6xl"
            >
              Projects
            </a>

            <a
              href="#locations"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light tracking-wide transition-colors duration-300 hover:text-[#D4AF37] sm:text-5xl lg:text-6xl"
            >
              Locations
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light tracking-wide transition-colors duration-300 hover:text-[#D4AF37] sm:text-5xl lg:text-6xl"
            >
              Contact
            </a>

          </div>

        </div>
      </div>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />


        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#D4AF37] sm:text-sm">
              Crafted for living
            </p>


            {/* Heading */}
            <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              Spaces that

              <br />

              <span className="font-semibold text-[#D4AF37]">
                inspire life.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Discover thoughtfully designed spaces where architecture,
              comfort and modern living come together.
            </p>


            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-[#D4AF37] px-8 py-4 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:bg-white"
              >
                Explore Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-white/40 px-8 py-4 text-sm tracking-wide text-white transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Book a Site Visit
              </a>

            </div>

          </div>

        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
            Scroll
          </span>

          <div className="h-12 w-px bg-[#D4AF37]/60" />

        </div>

      </section>


      {/* =========================================================
          PLACEHOLDER SECTIONS
          We'll build these properly next.
      ========================================================= */}

      <section
        id="about"
        className="flex min-h-[50vh] items-center justify-center bg-white px-6 text-black"
      >
        <div className="max-w-3xl text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#B8941F]">
            About Us
          </p>

          <h2 className="text-4xl font-light sm:text-5xl">
            Building spaces with
            <span className="font-semibold"> purpose.</span>
          </h2>

          <p className="mt-6 leading-8 text-black/60">
            Our story, philosophy and approach to creating exceptional
            spaces will go here.
          </p>

        </div>
      </section>


      <section
        id="projects"
        className="min-h-[60vh] bg-black px-6 py-24 text-white lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Projects
          </p>

          <h2 className="text-4xl font-light sm:text-5xl lg:text-6xl">
            Spaces worth
            <span className="font-semibold"> discovering.</span>
          </h2>

          {/* Project cards will go here */}

        </div>

      </section>


      <section
        id="locations"
        className="flex min-h-[40vh] items-center justify-center bg-[#111111] px-6 text-center"
      >

        <div>

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Locations
          </p>

          <h2 className="text-4xl font-light sm:text-5xl">
            Where we build.
          </h2>

        </div>

      </section>


      <section
        id="contact"
        className="flex min-h-[50vh] items-center justify-center bg-white px-6 text-center text-black"
      >

        <div>

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#B8941F]">
            Get in Touch
          </p>

          <h2 className="text-4xl font-light sm:text-5xl">
            Let's create something
            <span className="font-semibold"> remarkable.</span>
          </h2>

          <button className="mt-8 bg-black px-8 py-4 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black">
            Contact Us
          </button>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/10 bg-black px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <img
            src="/brand_logo.svg"
            alt="Company Logo"
            className="h-12 w-auto"
            />

          <p className="text-xs text-white/40">
            © 2026 Your Brand. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}