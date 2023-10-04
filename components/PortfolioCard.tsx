import { MdChevronRight } from 'react-icons/md'
import Image from "next/image";

interface PortfolioCardProps {
    image?: string;
    title: string;
    description: string;
    link: string;
}

const PortfolioCard = ({image = "/portfolio.svg", title, description, link}: PortfolioCardProps) => {
    return(
        <div className='flex flex-col gap-6 items-center'>
            <Image src={image} height={400} width={400} alt="PortfolioImage" className='object-cover h-[400px]'/>
            <div className='flex flex-col w-[400px] gap-2 p-5'>
                <h3 className='text-2xl'>{title}</h3>
                <span className='text-gray-text-l'>{description}</span>
                <a href={link} className='flex w-32 items-center justify-center text-cv-yellow text-lg gap-2'>
                    Learn More
                    <MdChevronRight />
                </a>                
            </div>
        </div>
    );
}

export { PortfolioCard };