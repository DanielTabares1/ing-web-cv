import { MdChevronRight } from 'react-icons/md'
import Image from "next/image";

const PortfolioCard = () => {
    return(
        <div className='flex flex-col gap-6 items-center'>
            <Image src="/portfolio.svg" height={400} width={400} alt="PortfolioImage"/>
            <div className='flex flex-col w-[400px] gap-2 p-5'>
                <h3 className='text-2xl'>How To Make Web Templates</h3>
                <span className='text-gray-text-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </span>
                <a href="#" className='flex w-32 items-center justify-center text-cv-yellow text-lg gap-2'>
                    Learn More
                    <MdChevronRight />
                </a>                
            </div>
        </div>
    );
}

export { PortfolioCard };