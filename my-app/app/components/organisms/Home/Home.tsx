'use client'
import Land from "@/app/components/molecules/Land/Land";
import LatestProjects from "@/app/components/molecules/LatestProjects/LatestProjects";
import Nav from "@/app/components/atoms/Nav/Nav";
import LeftMenu from "@/app/components/atoms/LeftMenu/LeftMenu";
import {useRef} from "react";
import Menu from "@/app/components/atoms/Menu/Menu";


const Home = () => {

    const latestRef= useRef(null);

    return (
        <div className='flex flex-col items-center'>
            <LeftMenu/>
            <Nav/>
            <Menu/>
            <Land scrollTo={latestRef}/>
            <LatestProjects sectionRef={latestRef}/>
        </div>
    )
}

export default Home