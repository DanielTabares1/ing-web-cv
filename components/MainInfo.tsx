import Image from "next/image";
import { KnowledgeCard } from "./KnowledgeCard";
import { MainButton } from "./MainButton";
import { MainTitle } from "./MainTitle";
import { EducationCard } from "./EducationCard";
import { PortfolioCard } from "./PortfolioCard";


const MainInfo = () => {
    return (
        <div className="h-full w-full flex flex-col gap-12 ml-80 mr-20 px-20">

            <div className=" flex justify-between items-center px-12 bg-white">
                <div className="flex flex-col gap-7 h-max py-12">
                    <div>
                        <h1 className="text-4xl">{`I'm Daniel Tabares`}</h1>
                        <h1 className="text-4xl"><span className="text-cv-yellow">Full Stack</span> Developer</h1>
                    </div>

                    <span className="text-gray-text-l w-[500px]">I am a Systems engineering student from Medellín, Colombia. I work at the Integrated Systems Laboratory (LIS) on University of Antioquia as Technical manager and leader of the team of programming assistants.</span>
                    <MainButton />
                </div>

                <div className="h-max">
                    <Image src="/images/profile.jpg" width={400} height={400} alt="Foto" />
                </div>
            </div>


            <div className="flex flex-col items-center gap-7">
                <MainTitle title="My Knowledge" description="I enjoy everything related to technology, systems and programming, and also sharing these topics with others by teaching; By the way I would like to work not only as engineer and software developer but also as teacher because of I believe that the most you explain, the most you learn." />
                <div className="flex flex-wrap justify-between gap-8">
                    <KnowledgeCard image="/images/icons/web.svg" title="Web Development" content="FrontEnd, Deployment" />
                    <KnowledgeCard image="/images/icons/backend.svg" title="Backend Development" content="APIs, Microservices" />
                    <KnowledgeCard image="/images/icons/server.svg" title="Server Management" content="Virtualization, Containers, Proxmox" />
                    <KnowledgeCard image="/images/icons/games.svg" title="VideoGame Development" content="Game programming, Unity" />
                    <KnowledgeCard image="/images/icons/linux.svg" title="OS & Linux" content="Terminal, Tools, Software, OpenSource" />
                </div>
            </div>


            <div className="flex flex-col items-center gap-7">
                <MainTitle title="Education" description="I am a dedicated student committed to my professional development, a knowledge enthusiast and an eager learner." />
                <div className="flex flex-col px-12 bg-white">
                    <EducationCard
                        title="Universidad de Antioquia"
                        charge="Student"
                        Date="Jun 2019 - Present"
                        course="Systems Engineering Career" description="Through this program, I have delved into the world of technology and computer science, gaining knowledge in programming, system design, databases, networks, cybersecurity, and project management." />
                    <hr />                    
                    <EducationCard
                        title="Felix María Restrepo School " 
                        charge="Student"
                        Date="Jan 2012 - Nov 2018"
                        course="High School Degree" description="This period provided me with a strong educational foundation, fostering problem-solving, teamwork, and time management skills, all of which have been invaluable in my ongoing education." />
                </div>
            </div>



            <div className="flex flex-col w-fit flex-auto items-center gap-7">
                <MainTitle title="Portfolio" description="I enjoy harnessing my creativity to approach and solve problems innovatively." />
                <div className="overflow-x-auto w-[1341px]">
                    <div className="flex gap-20"> 
                        <PortfolioCard image="/images/portfolio/mision02.png" title="Mision 02 - Camino a la calidad" description="A Video Game developed in Unity. The game intends to teach the importance of the accreditation process of higher education institutions in Colombia."
link="https://github.com/Sofito-code/Proyecto-integrador-1"/>  
                        <PortfolioCard image="/images/portfolio/next-cv.png" title="NextJS & Tailwind CV" description="A Web FrontEnd project developed for Web Engineering subject. Using NextJS, TailWind, ReactIcons and deployed in Vercel App" link="https://github.com/DanielTabares1/ing-web-cv"/>                  
                    </div> 
                </div>                               
            </div>


            <div className="bg-white w-full flex justify-center items-center h-12">
                <span className="text-gray-text-l">Privacy Statement: This resume contains confidential information and should only be used for employment evaluation purposes. </span>
            </div>
        </div>
    );
};

export { MainInfo };