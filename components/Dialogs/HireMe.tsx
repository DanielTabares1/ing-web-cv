import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { MainButton } from "../MainButton";
import { SetStateAction, Dispatch } from "react";

interface HireMeProps {
    open: boolean;
    setDialogOpen: Dispatch<SetStateAction<boolean>>
}


const HireMe = ({open, setDialogOpen}:HireMeProps) => {

    return (
        <Dialog open={open}>
            <DialogTitle>
                <span>Titulo del díalogo</span>
            </DialogTitle>
            <DialogContent>
                <div>Contenido del diálogo</div>
                <MainButton handleClick={() => {setDialogOpen(false)}}/>
            </DialogContent>
        </Dialog>
    );

};

export { HireMe };