"use client";
import Land from "@/app/components/molecules/Land/Land";
import LatestProjects from "@/app/components/molecules/LatestProjects/LatestProjects";
import Nav from "@/app/components/atoms/Nav/Nav";
import LeftMenu from "@/app/components/atoms/LeftMenu/LeftMenu";
import { useRef, useState } from "react";
import Menu from "@/app/components/atoms/Menu/Menu";
import CtaSection from "../../molecules/CtaSection/CtaSection";
import Studio from "../../molecules/Studio/Studio";
import Latest from "../../molecules/Latest/Latest";

const Home = () => {
  const latestRef = useRef<null>(null);
  const homeRef = useRef<null>(null);
  const latestProjectsRef = useRef<null>(null);
  const studioRef = useRef<null>(null);
  const ctaRef = useRef<null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);


    const scrollToSection = (elementRef: any):void => {
        setIsOpen(false);
        elementRef.current.scrollIntoView({ behavior: "smooth",block: "start"});
    };

  return (
    <div className="flex flex-col items-center w-full  m-auto bg-black">
      <LeftMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} scrollToSection={scrollToSection} refs={{homeRef,latestProjectsRef,studioRef,latestRef,ctaRef}} />
      <Land sectionRef={homeRef} scrollTo={latestProjectsRef} />
      <LatestProjects sectionRef={latestProjectsRef} />
      <Studio sectionRef={studioRef}/>
      <Latest sectionRef={latestRef}/>
      <CtaSection sectionRef={ctaRef} />
    </div>
  );
};

export default Home;
