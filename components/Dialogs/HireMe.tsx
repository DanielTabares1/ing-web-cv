import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { MainButton } from "../MainButton";
import { SetStateAction, Dispatch } from "react";
import { MdClose, MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import Image from "next/image";

interface HireMeProps {
    open: boolean;
    setDialogOpen: Dispatch<SetStateAction<boolean>>
}


const HireMe = ({open, setDialogOpen}:HireMeProps) => {

    return (
        <Dialog open={open}>
            <DialogTitle>
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex justify-end w-full">
                        <MainButton title="" Icono={MdClose} handleClick={() => {setDialogOpen(false)}}/>
                    </div>
                    <Image src="/hire.gif" alt="Thanks for your interest" width={600} height={300}/>
                    <span className="font-semibold">Thanks for your interest, ¡Please click below!</span>
                </div>
                
            </DialogTitle>
            <DialogContent>
                <div className="flex justify-around">
                    <a className="bg-blue-500 px-2 py-1 rounded-md text-white font-semibold flex items-center gap-3" href="mailto:serabatdaniel@outlook.com" target="_blank">Send E-mail<MdOutlineEmail /></a>
                    <a className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold flex items-center gap-3" href="https://wa.me/573222574446?text=I'm%20interested%20in%20you%" target="_blank">Send Whats <MdOutlineWhatsapp /></a>
                </div>                
            </DialogContent>
        </Dialog>
    );

};

export { HireMe };