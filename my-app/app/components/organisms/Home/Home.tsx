import Land from "@/app/components/molecules/Land/Land";
import LatestProjects from "@/app/components/molecules/LatestProjects/LatestProjects";
import Nav from "@/app/components/atoms/Nav/Nav";
import LeftMenu from "@/app/components/atoms/LeftMenu/LeftMenu";


const Home = () => {
    return (
        <div className='flex flex-col items-center'>
            <LeftMenu/>
            <Nav/>
            <Land/>
            <LatestProjects></LatestProjects>
        </div>
    )
}

export default Home