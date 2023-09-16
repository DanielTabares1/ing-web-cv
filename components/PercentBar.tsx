

interface PercentBarProperties {
    text:string;
    percent: number;
}



const PercentBar = ({text, percent}: PercentBarProperties) => {

    return(

        <div className="w-full flex flex-col gap-1">

            <div className="flex justify-between text-gray-text-l text-sm font">
                <span>{text}</span>
                <span>{percent}%</span>
            </div>
            <div>
                <div className="h-2 border border-cv-yellow rounded-full p-[2px]">
                    <div className={`border border-cv-yellow bg-cv-yellow h-full`} style={{width:218/100*percent}}></div>
                </div>
            </div>
        
        </div>

    );


}

export { PercentBar };