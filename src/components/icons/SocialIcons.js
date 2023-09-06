import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
export const FacebookIcon = () => {
  return (
    <a href="#" className="text-gray-500 hover:text-gray-600">
      <FaFacebookF className="w-6 h-6" />
    </a>
  );
};

export const InstagramIcon = () => {
    return (
        <a href="#" className="text-gray-500 hover:text-gray-600">
        <FaInstagram className="w-6 h-6" />
      </a>
     
    )
}

export const WhatsAppIcon = () =>{
    return (
        <a href="#" className="text-gray-500 hover:text-gray-600">
        <FaWhatsapp className="w-6 h-6" />
      </a>
    )
}

export const PhoneIcon = () => {
    return(
        <a href="#" className="text-gray-500 hover:text-gray-600">
        <BsFillTelephoneFill className="w-6 h-6" />
      </a>
    )
}

export const EmailIcon = () => {
    return (
        <a href="#" className="text-gray-500 hover:text-gray-600">
            <MdEmail className='w-6 h-6'/>
        </a>
    )
}