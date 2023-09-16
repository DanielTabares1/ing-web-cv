

interface ItemProps {
    title: string,
    value: string,
    valColor?: boolean,
}

const ContactItem = ({title, value, valColor}: ItemProps) => {

    return (

    <div className="flex justify-between">
        <div>{title}:</div>
        <div className={valColor ? "text-l-green" : "text-black"}>{value}</div>
    </div>   

    );
};

export { ContactItem };