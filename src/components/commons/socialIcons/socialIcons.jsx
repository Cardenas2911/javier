import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/javier-cuevas-kintsugi/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#ef4444] drop-shadow-[1px_1px_0_#8c0303]"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://instagram.com/creativoskintsugi"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#ef4444] drop-shadow-[1px_1px_0_#8c0303]"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7" />
      </a>

      <a
        href="https://wa.me/573000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#ef4444] drop-shadow-[1px_1px_0_#8c0303]"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>

      <a
        href="mailto:contacto@creativoskintsugi.com"
        className="mx-3 text-zinc-400 hover:text-[#ef4444] drop-shadow-[1px_1px_0_#8c0303]"
        aria-label="Email"
      >
        <FaEnvelope className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
