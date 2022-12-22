import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)]  scrollbar-hide md:scrollbar-default text-white overflow-y-scroll overflow-x-hidden scrollbar  scrollbar-track-gray-300 scrollbar-track-rounded-lg scrollbar-thumb-[#f7ac0acb] hover:scrollbar-thumb-[#F7AB0A] scrollbar-thumb-rounded-lg  z-0  snap-y snap-mandatory h-screen">
      <Head>
        <title>Eitse Portfolio</title>
        <link rel="icon" href="/image/eitsepix3.jpeg" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="flex justify-center snap-start">
        <Skills />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contactme" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky w-full bottom-5 flex justify-center items-center">
          <img
            src="/image/footer_top_1.jpg"
            className="h-8 w-8 rounded-full filter grayscale hover:grayscale-0"
            alt=""
          />
        </footer>
      </Link>
    </div>
  );
};

export default Home;
