import Land from "@/app/components/molecules/Land/Land";
import LatestProjects from "@/app/components/molecules/LatestProjects/LatestProjects";
import Nav from "@/app/components/atoms/Nav/Nav";
import LeftMenu from "@/app/components/atoms/LeftMenu/LeftMenu";
import CtaSection from "./CtaSection"; 


const Home = () => {
    return (
        <div className='flex flex-col items-center'>
            <LeftMenu/>
            <Nav/>
            <Land/>
            <LatestProjects></LatestProjects>
            <CtaSection />
        </div>
    )
}

export default Home