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

                    <span className="text-gray-text-l w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis tempore illum quibusdam reiciendis, quo odio exercitationem dolor qui doloribus debitis repellendus ex fuga doloremque earum sed eius neque laudantium!</span>
                    <MainButton />
                </div>

                <div className="h-max">
                    <Image src="/images/profile.jpg" width={400} height={400} alt="Foto" />
                </div>
            </div>


            <div className="flex flex-col items-center gap-7">
                <MainTitle title="My Knowledge" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum error necessitatibus commodi cupiditate officiis! Illo id aperiam cum voluptate, eos eum repellat tempora aliquid nam inventore facilis asperiores veniam." />
                <div className="flex flex-wrap justify-between gap-8">
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce" />
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce" />
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce" />
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce" />
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce" />
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce" />
                </div>
            </div>


            <div className="flex flex-col items-center gap-7">
                <MainTitle title="Education" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" />
                <div className="flex flex-col px-12 bg-white">
                    <EducationCard
                        title="University of Toronto"
                        charge="Student"
                        Date="Jan 1016 - Dec 2021"
                        course="Certificate of web training" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui." />
                    <hr />
                    <EducationCard
                        title="University of Toronto"
                        charge="Student"
                        Date="Jan 1016 - Dec 2021"
                        course="Certificate of web training" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui." />
                    <hr />
                    <EducationCard
                        title="University of Toronto"
                        charge="Student"
                        Date="Jan 1016 - Dec 2021"
                        course="Certificate of web training" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui." />
                </div>
            </div>



            <div className="flex flex-col w-fit flex-auto items-center gap-7">
                <MainTitle title="Portfolio" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" />
                <div className="overflow-x-auto w-[1341px]">
                    <div className="flex gap-20"> 
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                    </div> 
                </div>                               
            </div>


            <div className="bg-white w-full flex justify-center items-center h-12">
                <span className="text-gray-text-l">2021 All Rights Reserved.Ojjomedia</span>
            </div>
        </div>
    );
};

export { MainInfo };