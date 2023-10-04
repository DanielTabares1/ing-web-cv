import { IconType } from "react-icons";

interface IconProps {
    Icon: IconType;
    src?: string;
}

const Icon = ({Icon, src}: IconProps) => {
    return(        
        <div className="bg-cv-yellow rounded-full p-3">
            <a className="text-gray-700 text-3xl hover:cursor-pointer" href={src} target="_blank">
                <Icon  />
            </a>
        </div>
    );
};

export { Icon };