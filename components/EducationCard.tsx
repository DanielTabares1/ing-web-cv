interface EducationCardProps {
    title: string;
    charge: string;
    Date: string;
    course: string;
    description: string;
};

const EducationCard = ({ title, charge, Date, course, description }: EducationCardProps) => {

    return (
        <div className="flex h-48 items-center gap-20">
            <div className="h-full flex flex-col w-[30rem] justify-center gap-7">
                <div>
                    <h3 className="font-semibold text-2xl">{title}</h3>
                </div>
                <div className="flex gap-4 items-center">
                    <h4>{charge}</h4>
                    <h4 className="bg-cv-yellow px-2 py-0.5 text-white">{Date}</h4>
                </div>
            </div>

            <div className="flex flex-col h-full justify-center gap-7">
                <h3 className="font-semibold text-xl">{course}</h3>
                <span className="text-gray-text-l">{description}</span>
            </div>
        </div>
    );
};

export { EducationCard };