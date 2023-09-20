import { Skill } from "./Skill";

const SkillContainer = () => {

    return (

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

    );

};

export { SkillContainer };