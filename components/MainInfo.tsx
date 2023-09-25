import Image from "next/image";
import { KnowledgeCard } from "./KnowledgeCard";
import { MainButton } from "./MainButton";
import { MainTitle } from "./MainTitle";


const MainInfo = () => {
    return(
        <div className="h-full w-full flex flex-col gap-12">

            <div className="flex justify-between items-center px-12 bg-white">
                <div className="flex flex-col gap-7 h-max">
                    <div>
                    <h1 className="text-4xl">I'm Daniel Tabares</h1>
                    <h1 className="text-4xl"><span className="text-cv-yellow">Full Stack</span> Developer</h1>
                    </div>
                    
                    <span className="text-gray-text-l w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis tempore illum quibusdam reiciendis, quo odio exercitationem dolor qui doloribus debitis repellendus ex fuga doloremque earum sed eius neque laudantium!</span>
                    <MainButton />
                </div>

                <div className="h-max">
                    <Image src="/favicon.ico" width={400} height={400} alt="Foto"/>
                </div>
            </div>


            <div className="flex flex-col items-center gap-7">
                <MainTitle title="My Knowledge" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum error necessitatibus commodi cupiditate officiis! Illo id aperiam cum voluptate, eos eum repellat tempora aliquid nam inventore facilis asperiores veniam."/>                
                <div className="flex flex-wrap justify-between gap-8">
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce"/>
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce"/>
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce"/>
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce"/>
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce"/>
                    <KnowledgeCard image="/next.svg" title="Web Development" content="Blog, E-Commerce"/>
                </div>
            </div>


            <div>
                <MainTitle title="Education" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" />
            </div>
            
            

            <div>
                <MainTitle title="Portfolio" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" />
            </div>


            <div className="bg-white w-full flex justify-center items-center h-12">
                <span className="text-gray-text-l">2021 All Rights Reserved.Ojjomedia</span>
            </div>
        </div>
    );
};

export { MainInfo };