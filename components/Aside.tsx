import { AsideContainer } from "./SkillsContainer";
import { Skill } from "./Skill";
import { PercentBar } from "./PercentBar";


const Aside = () => {

    return(
        <div className="h-screen flex flex-col w-64 bg-white p-4 gap-5">


            <div></div>
            <div></div>

            <hr />

            <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Languages</h4>
                <PercentBar text="Spanish" percent={100}/>
                <PercentBar text="English" percent={60}/>
            </div>
            
            <hr />
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Programming Languages</h4>
                <PercentBar text="Java" percent={70}/>
                <PercentBar text="Python" percent={50}/>
                <PercentBar text="HTML" percent={90}/>
                <PercentBar text="JavaScript" percent={60}/>
                <PercentBar text="C#" percent={40}/>
            </div>

                        
            <hr />
            <AsideContainer />
            

        </div>
    );

};

export { Aside };