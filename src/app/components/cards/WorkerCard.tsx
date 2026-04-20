import Image from "next/image";
const WorkerCard = () => {
  return (
    <div className=" flex flex-col md:flex-row md:items-center gap-4  backdrop-blur-lg z-9 mt-10">
      <Image className=" rounded-md" src={`./images/workers/andreas_sage_amadeu.jpeg`} alt="Creoo Studio with a logo" width={200} height={200} unoptimized />
      <div>
        <h3 className=" text-[1.5rem] font-medium text-secoundaryColor_white">Andreas Sage Amadeu</h3>
        <p className=" text-paragraph text-secoundaryColor_white">Designer & Developer</p>
        <p className="pt-2 w-max text-paragraph italic text-transparent bg-clip-text bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab] max-w-[100%]   lg:max-w-[70%]">“Loves turning big ideas into sleek digital products”</p>
        <div className="flex gap-4 mt-4 flex-wrap ">
          <a href="mailto:andreassage@gmail.com">
            <div className="border p-4 bg-boxColor_black_800 rounded-lg shadow-lg border-[#4f4f4f] flex items-center justify-center text-center gap-4 max-w-sm backdrop-blur-lg z-9  w-max hover:bg-[#4A4A4A] transition-colors duration-300">
              <Image src={`./svg/icons/email.svg`} alt="Email" width={24} height={24} />
              <p>Andreassage@gmail.com</p>
            </div>
          </a>
          <a href="tel:+4522507898">
            <div className="border p-4 bg-boxColor_black_800 rounded-lg shadow-lg border-[#4f4f4f] flex items-center justify-center text-center gap-4 max-w-sm backdrop-blur-lg z-9  w-max hover:bg-[#4A4A4A] transition-colors duration-300">
              <Image src={`./svg/icons/phone.svg`} alt="GitHub" width={24} height={24} />
              <p>22 50 78 98</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/andreas-amadeu-568242260/">
            <div className="border p-4 bg-boxColor_black_800 rounded-lg shadow-lg border-[#4f4f4f] flex items-center justify-center text-center gap-4 max-w-sm backdrop-blur-lg z-9  w-max hover:bg-[#4A4A4A] transition-colors duration-300">
              <Image src={`./svg/icons/link.svg`} alt="LinkedIn" width={24} height={24} />
              <p>LinkedIn</p>
            </div>
          </a>

          <a href="https://github.com/sagecave?tab=repositories">
            <div className="border p-4 bg-boxColor_black_800 rounded-lg shadow-lg border-[#4f4f4f] flex items-center justify-center text-center gap-4 max-w-sm backdrop-blur-lg z-9  w-max hover:bg-[#4A4A4A] transition-colors duration-300">
              <Image src={`./svg/icons/link.svg`} alt="GitHub" width={24} height={24} />
              <p>GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
