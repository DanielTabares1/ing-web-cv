import Image from "next/image";

interface KnowledgeCardProps {
    image?: string;
    title: string;
    content: string;
}

const KnowledgeCard = ({ image = "/favicon.ico", title, content }: KnowledgeCardProps) => {
    return (
        <div className="flex flex-col bg-white items-center w-96 h-72 justify-center gap-8">
            <Image src={image} width={80} height={80} alt="KnowledgeIcon"/>
            <span className="font-semibold text-2xl">{title}</span>
            <span className="text-xl text-gray-text-l">{content}</span>
        </div>
    );
};

export { KnowledgeCard };