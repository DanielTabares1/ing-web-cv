import Image from "next/image";
import { KnowledgeCard } from "./KnowledgeCard";
import { MainButton } from "./MainButton";


const MainInfo = () => {
    return(
        <div className="h-full debug w-full flex flex-col gap-12">

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
                <h2 className="text-5xl font-semibold">My Knowledge</h2>
                <span className="text-gray-text-l text-center px-52">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum error necessitatibus commodi cupiditate officiis! Illo id aperiam cum voluptate, eos eum repellat tempora aliquid nam inventore facilis asperiores veniam.</span>
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

            </div>
            

            <div></div>


            <div></div>
        </div>
    );
};

export { MainInfo };