import { AsideContainer } from "./SkillsContainer";
import { PercentBar } from "./PercentBar";
import { ContactItem } from "./ContactItem";
import Image from "next/image";


const Aside = () => {

    return(
        <div className="h-screen flex flex-col w-64 bg-white p-8 gap-5">


            <div>              


            </div>

            <hr />
            <div>
                <ContactItem title="Age" value="21"/>
                <ContactItem title="Residence" value="BD" />
                <ContactItem title="Freelance" value="Available" valColor/>
                <ContactItem title="Address" value="Dhaka,Bagladesh" />
            </div>

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