import { Icon } from "./Icon";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandGithubFilled } from "react-icons/tb";

const Links = () => {
    return(        
        <div className="h-screen w-20 bg-white flex flex-col items-center gap-3 p-4 fixed top-0 right-0">
            <h4 className="font-semibold">Links</h4>            
            <Icon Icon={FaFacebookF} src="https://www.facebook.com/daniel.tabarespavas"/>
            <Icon Icon={PiInstagramLogoFill} src="https://www.instagram.com/serabatdaniel/"/>
            <Icon Icon={FaTwitter} src="https://twitter.com/pavas_taba15169"/>
            <Icon Icon={FaLinkedinIn} src="https://www.linkedin.com/in/daniel-tabares-pavas"/>
            <Icon Icon={FaYoutube} src="https://www.youtube.com/channel/UCSRcWbmNHEDl1pxe3HLSdTw"/>
            <Icon Icon={TbBrandGithubFilled} src="https://github.com/DanielTabares1"/>       
        </div>
    );
};

export { Links };