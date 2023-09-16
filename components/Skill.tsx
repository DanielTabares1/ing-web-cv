import { PiSubtractSquare } from "react-icons/pi";

interface SkillProps  {
    text: string
}

const Skill = ({text}: SkillProps ) => {

    return(

        <div className="flex items-center gap-3 text-gray-text-l">
            <span className="text-cv-yellow">
                <PiSubtractSquare />
            </span>
            {text}            
        </div>

    );

};

export { Skill };