import {MdArrowForward} from "react-icons/md";

interface MainButtonProps {
    handleClick?: () => void;
}

const MainButton = ({handleClick=()=>{}}: MainButtonProps) => {
   
    return(
        <button onClick={handleClick} className="font-semibold flex items-center gap-3 bg-cv-yellow w-fit px-3 py-2 rounded-lg ">
            HIRE ME 
            <MdArrowForward />
        </button>
    );
}

export {MainButton};