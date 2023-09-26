interface MainTitleProps {
    title: string;
    description: string;
}

const MainTitle = ({title, description}:MainTitleProps) => {

    return(
        <div className="flex flex-col items-center gap-7">
            <h2 className="text-5xl font-semibold">{title}</h2>
                <span className="text-gray-text-l text-center px-52">{description}</span>
        </div>        
    );
};

export { MainTitle };