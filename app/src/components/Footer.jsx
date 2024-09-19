import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <img src={logo} width={200} className="my-20" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <a href="https://www.planalto.gov.br/ccivil_03/Leis/L9610.htm" target="_blank">
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            &copy;LuiLoureiro. Todos os Direitos Reservados
        </p>
      </a>
    </div>
  );
};

export default Footer;
