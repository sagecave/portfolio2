import Image from "next/image";

interface ValueCardProps {
  icon: string;
  title: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title }) => {
  return (
    <div className="border pt-6 pb-6 pl-0 pr-0 rounded-lg shadow-lg border-[#4f4f4f] flex flex-col items-center justify-center text-center gap-4 max-w-sm backdrop-blur-lg z-9 ">
      <Image src={`./svg/icons/${icon}.svg`} alt="Creoo Studio with a logo" width={30} height={30} unoptimized />
      <p className="  text-secoundaryColor_white">{title}</p>
    </div>
  );
};

export default ValueCard;
