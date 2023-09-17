import { Skill } from "./Skill";

const AsideContainer = () => {

    return(
        
        <div className="flex flex-col gap-4">
            <div>
                <h4 className="font-semibold">Extra Skills</h4>
                <Skill text="Docker" />
                <Skill text="NextJS" />
                <Skill text="Java, Spring"/> 
            </div>
            <hr />
        </div>

    );

};

export { AsideContainer };