'use client'
import { useRef } from 'react'
import Showcase from '@/components/sections/Showcase'
import AboutSection from "@/components/sections/About";
import SkillSection from "@/components/sections/Skills";
import ProjectSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";
import Navbar from '@/components/Navbar'
import MediaNav from '@/components/MediaNav';



export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <MediaNav 
        fn={scrollToRef} 
        home={homeRef}
        about={aboutRef}
        project={projectsRef}
        contact={contactRef}
      />
      <Navbar 
        fn={scrollToRef} 
        home={homeRef}
        about={aboutRef}
        project={projectsRef}
        contact={contactRef}
      />
      <Showcase sectionRef={homeRef} fn={scrollToRef} contact={contactRef}/>
      <AboutSection sectionRef={aboutRef}/>
      <SkillSection />
      <ProjectSection sectionRef={projectsRef}/>
      <ContactSection sectionRef={contactRef}/>
    </>
  );
}
