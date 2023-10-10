import { IconType } from "react-icons";
import {MdArrowForward} from "react-icons/md";

interface MainButtonProps {
    title: string;
    Icono: IconType;
    handleClick?: () => void;
}

const MainButton = ({title, Icono, handleClick=()=>{}}: MainButtonProps) => {
   
    return(
        <button onClick={handleClick} className="font-semibold flex items-center gap-3 bg-cv-yellow w-fit px-3 py-2 rounded-lg ">
            {title}
            <Icono/>
        </button>
    );
}

export {MainButton};