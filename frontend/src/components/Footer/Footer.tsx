import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-6 h-[170px]">
      <div className="container mx-auto px-4 flex flex-col 
      md:flex-row justify-center items-center">
        <div className="flex justify-center lg:mr-8 mb-4 lg:mb-0">
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:bg-amber-200 p-3 
            rounded-full bg-white text-black font-semibold"
          >
            <AiOutlineMail size={24} />
          </a>
          <a
            href="https://www.facebook.com/yourfacebookpage"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-3 
            rounded-full bg-white text-black font-semibold hover:bg-amber-200"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:bg-amber-200 p-3 
            rounded-full bg-white text-black font-semibold"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div className="text-center lg:text-right relative top-10">
          <p className="text-white text-sm lg:text-base mb-2 lg:mb-0">
            <a
              href="/services"
              className="text-white hover:text-amber-600 mr-4 font-serif
              text-lg"
            >
              Services
            </a>
            <a
              href="/"
              className="text-white hover:text-amber-600 mr-4 font-serif
              text-lg"
            >
              Home
            </a>
          </p> 
          <p className="text-white text-lg lg:text-lg flex 
          justify-center pt-7 font-serif hover:text-amber-600 pb-7 mb-0">
            © 2024 developed and designed by Asmita Shrestha & Shiraj Shrestha.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
