import {MdArrowForward} from "react-icons/md";

const MainButton = () => {
    return(
        <a href="#" className="font-semibold flex items-center gap-3 bg-cv-yellow w-fit px-3 py-2 rounded-lg ">
            HIRE ME 
            <MdArrowForward />
        </a>
    );
}

export {MainButton};