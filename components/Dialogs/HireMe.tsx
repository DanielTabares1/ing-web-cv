import { Dialog, DialogContent, DialogTitle } from "@mui/material";

interface HireMeProps {
    open: boolean;
}


const HireMe = ({open}:HireMeProps) => {

    return (
        <Dialog open={open}>
            <DialogTitle>
                <span>Titulo del díalogo</span>
            </DialogTitle>
            <DialogContent>
                <div>Contenido del diálogo</div>
            </DialogContent>
        </Dialog>
    );

};

export { HireMe };