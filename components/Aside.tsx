import { PercentBar } from "./PercentBar";
import { ContactItem } from "./ContactItem";
import { Skill } from "./Skill";
import Image from "next/image";

const Aside = () => {

    return (
        <div className="h-screen flex fixed top-0 flex-col w-80 bg-white px-6 py-3 gap-3.5">

            <div className="flex flex-col items-center gap-6">
                <div>
                    <Image src='/images/profile.jpg' alt="profile" width={150} height={150} className="rounded-full" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h4 className="font-semibold">Daniel Tabares</h4>
                    <p className="text-gray-text-l">Estudiante Ing de Sistemas</p>
                </div>
            </div>

            <hr />
            <div>
                <ContactItem title="Age" value="21" />
                <ContactItem title="Residence" value="Medellín - CO" />
                <ContactItem title="phone" value="+57 3222574446" />
                <ContactItem title="E-mail" value="serabatdaniel@outlook.com" valColor />                
            </div>

            <hr />
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Languages</h4>
                <PercentBar text="Spanish" percent={100} />
                <PercentBar text="English" percent={60} />
            </div>

            <hr />
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Programming Languages</h4>
                <PercentBar text="Java" percent={70} />
                <PercentBar text="Python" percent={50} />
                <PercentBar text="HTML" percent={90} />
                <PercentBar text="JavaScript" percent={60} />
                <PercentBar text="C#" percent={50} />

            </div>

            <hr />            
            <div className="flex flex-col">
                <div>
                    <h4 className="font-semibold">Extra Skills</h4>
                    <Skill text="Docker" />
                    <Skill text="NextJS" />
                    <Skill text="Ansible" />
                    <Skill text="Linux" />
                    <Skill text="Git, Github" />
                    <Skill text="Fast Learning" />
                </div>
            </div>

        </div>
    );
};

export { Aside };