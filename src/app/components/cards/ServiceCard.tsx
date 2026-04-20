import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative group max-w-sm h-full">
      {/* Gradient glow (shows outside the card edges) */}
      <a className="pt-4 text-paragraph mt-auto text-primaryColor_black_400" href="#GetInTouch">
        <div
          className="
          pointer-events-none
          absolute -inset-[2px] rounded-sm
          opacity-0 group-hover:opacity-100
          blur-2xl transition duration-300
          bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab]
          z-0
        "
        />

        {/* Card content */}
        <div
          className="
          relative z-9
          shadow-lg bg-boxColor_black_800 
          p-5 rounded-sm flex flex-col gap-4 
          backdrop-blur-lg h-full
        "
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src={`/svg/icons/${icon}.svg`} alt="icons" width={30} height={30} unoptimized />
              <h3 className="text-[1.25rem] text-secoundaryColor_white">{title}</h3>
            </div>
            <p className="text-paragraph text-secoundaryColor_white">{description}</p>
          </div>
          {/* Call to action link */}

          <p className="pt-4 text-paragraph mt-auto text-primaryColor_black_400 group-hover:text-secoundaryColor_white">Get in touch &rarr;</p>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
