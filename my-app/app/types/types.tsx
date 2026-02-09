import {RefObject} from "react";


export interface LandProps{
    scrollTo:any;
    sectionRef:RefObject<null>;
}
export interface SectionProps {
    sectionRef:RefObject<null>;
}

export interface MenuOptionsProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export interface MenuProps {
    isOpen: boolean;
    scrollToSection: (elementRef: RefObject<null>) => void;
    refs: {
        homeRef:RefObject<null>;
        latestProjectsRef: RefObject<null>;
        studioRef: RefObject<null>;
        latestRef: RefObject<null>;
        ctaRef: RefObject<null>;
    };
}