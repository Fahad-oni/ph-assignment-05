import Foot from '../assets/logo-text.png'

const Footer = () => {
  return (
    <div id="contact" className="px-4 md:px-12 container mx-auto mt-25">
      <div className="md:grid md:grid-cols-4 gap-8">
        <div className="flex flex-col justify-center items-center space-y-2 text-center md:grid md:text-left">
          <img src={Foot} alt="" />
          <p className="text-[0.7rem] font-semibold text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 mt-2 text-[0.8rem] font-semibold">
            <a href="#github">GitHub</a>
            <a href="#twitter">Twitter</a>
            <a href="#inkedIn">LinkedIn</a>
          </div>
        </div>
        <div className="space-y-1 hidden md:flex md:flex-col">
          <h2 className="text-md font-semibold mb-3">PRODUCT</h2>
          <a
            href="#home"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Home
          </a>
          <a
            href="#technologies"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Projects
          </a>
        </div>
        <div className="space-y-1 hidden md:flex md:flex-col">
          <h2 className="text-md font-semibold mb-3">COMPANY</h2>
          <a
            href="#about"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Contact
          </a>
          <a
            href="#careers"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Careers
          </a>
        </div>
        <div className="space-y-1 hidden md:flex md:flex-col">
          <h2 className="text-md font-semibold mb-3">LEGAL</h2>
          <a
            href="#privacy"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Terms of Service
          </a>
        </div>
      </div>

      <div className="divider mt-15 "></div>
      <div className="flex justify-between py-4 text-[#94A3B8] text-[0.7rem] ">
        <p className="">© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-2">
          <a
            href="#privacy"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="text-[0.7rem] font-semibold text-[#64748B]"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;