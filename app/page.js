import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import WorkHistory from "@/components/WorkHistory";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mt-20">
          <Header />
          <Contacts />
          <About />
          <Skills />
          <WorkHistory />
          <Projects />
          <Reviews />
        </div>
      </main>
      <Footer />
    </>
  );
}
