import { Icon } from "./Icon";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill, PiDevToLogoFill } from "react-icons/pi";

const Links = () => {
    return(

        
        <div className="h-screen w-20 bg-white flex flex-col items-center gap-3 p-4">
            <h4 className="font-semibold">Links</h4>            
            <Icon Icon={FaFacebookF} src="https://www.google.com"/>
            <Icon Icon={PiInstagramLogoFill} src="https://www.google.com"/>
            <Icon Icon={FaTwitter} src="https://www.google.com"/>
            <Icon Icon={FaLinkedinIn} src="https://www.google.com"/>
            <Icon Icon={FaYoutube} src="https://www.google.com"/>
            <Icon Icon={PiDevToLogoFill} src="https://www.google.com"/>            
        </div>
    );
};

export { Links };