import Image from "next/image";
import MainLayout from "./layouts/MainLayout";
import ServiceCard from "./components/cards/ServiceCard";
import ValueCard from "./components/cards/ValueCard";
import WorkersCard from "./components/cards/WorkerCard";
export default function Home() {
  return (
    <MainLayout>
      <section id="Home" className=" min-h-[90vh] flex items-center justify-center  pr-12 pl-12 xl:pl-0 xl:pr-0 ">
        <div className="flex flex-col items-center justify-center text-center">
          <Image src="./svg/myName.svg" alt="Creoo Studio with a logo" width={800} height={800} unoptimized priority={true} />
          <p className="text-primaryColor_black_400 p-4">{"I love taking something from idea to deployed product"}</p>
        </div>
      </section>
      <section className=" pr-12 pl-12 xl:pl-0 xl:pr-0 min-h-[50vh] xl:min-h-[60vh]">
        <h2 className=" text-[2.5rem] md:text-[4.5rem] lg:leading-24 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab] max-w-[100%]   lg:max-w-[70%]">
          Too many great ideas never get the website they deserve.
        </h2>
        <p className="max-w-[100%] text-primaryColor_black_400  lg:max-w-[50%]">our project should look as good as it works. I design and build modern, powerful websites that bring your vision to life.</p>
      </section>
      <section id="WhatIDo" className=" mt-15 xl:mt-0 pr-12 pl-12 xl:pl-0 xl:pr-0 min-h-[50vh]">
        <h2 className="mt-20 w-max text-[2.5rem] lg:text-[4.5rem] lg:leading-24 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab] max-w-[100%]   lg:max-w-[70%]">WHAT I DO</h2>
        <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch ">
          <ServiceCard icon="code" title="Frontend Development" description="React, Next.js, React Native, Expo, JavaScript, HTML, CSS, Tailwind" />
          <ServiceCard icon="design" title="UI & UX Design" description="I create responsive, intuitive designs that are easy to use, thoroughly tested, and built with the user in mind." />
          <ServiceCard icon="repair" title="Backend Development" description="Node.js, Python, MySQL" />
        </div>
      </section>
      <section id="Projects" className="pr-12 pl-12 xl:pl-0 xl:pr-0 min-h-[70vh] mt-15 xl:mt-0">
        <h2 className="mt-20 w-max text-[2.5rem] lg:text-[4.5rem] lg:leading-24 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab] max-w-[100%] lg:max-w-[70%]">PROJECTS</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "9TSEVEN",
              description: "A fullstack website for a running community, featuring an online store for running clothing and event management. Built in a team of 3, where I contributed to both design and development.",
              tags: ["Next.js", "Tailwind", "Supabase", "Stripe", "Tanstack Query", "Vercel", "Figma"],
              link: "https://github.com/sagecave/web_9tseven-Improved",
              live: "https://web-9tseven-improved.vercel.app/",
            },
            {
              title: "Running App (Early Demo)",
              description: "A personal mobile app that tracks runs, pace, and distance, built from scratch with React Native and Expo. Designed with simplicity in mind. Source is private, but you can see it in action via the demo.",
              tags: ["React Native", "Expo", "Node.js", "Docker", "Figma"],
              link: "",
              live: "",
              youtube: "https://youtu.be/wnqPepzd2-E",
            },
          ].map((project, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/5 flex flex-col justify-between gap-4 hover:border-white/20 transition-all">
              <div>
                <h3 className="text-secoundaryColor_white text-header2">{project.title}</h3>
                <p className="text-primaryColor_black_400 text-paragraph mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full border border-white/10 text-primaryColor_black_400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primaryColor_black_400 hover:text-white transition-colors">
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-primaryColor_black_400 hover:text-white transition-colors">
                    Live →
                  </a>
                )}{" "}
                {project.youtube && (
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-primaryColor_black_400 hover:text-white transition-colors">
                    YouTube →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="About" className=" pr-12 pl-12 xl:pl-0 xl:pr-0 min-h-[70vh] mt-50">
        <h2 className="mt-20 w-max text-[2.5rem] lg:text-[4.5rem] lg:leading-24 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab] max-w-[100%]   lg:max-w-[70%]">ABOUT</h2>
        <div className=" grid-cols-1 lg:grid-cols-2 grid mt-6 gap-10 xl:gap-0">
          <div className="xl:max-w-lg">
            <h3 className=" text-header2 text-secoundaryColor_white">Who I Am</h3>
            <p className="text-paragraph text-primaryColor_black_400 mt-2">
              I&apos;m a frontend developer with a passion for design. I love turning ideas into clean, functional web experiences, writing code that&apos;s as thoughtful as the interface it builds.
            </p>
          </div>
          <div className="xl:max-w-lg">
            <h3 className=" text-header2 text-secoundaryColor_white">What Drives Me</h3>
            <p className=" text-paragraph text-primaryColor_black_400 mt-1">
              I believe the best digital products are the ones users don&apos;t have to think about. My goal is to build things that feel effortless, where great design and solid code meet.
            </p>
          </div>
        </div>
        <h3 className=" text-header2 mt-15 text-secoundaryColor_white">Values</h3>
        <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch  ">
          <ValueCard icon="bold" title="Clean Code"></ValueCard>
          <ValueCard icon="simplicity" title="Simplicity First"></ValueCard>
          <ValueCard icon="partnership" title="User Focused"></ValueCard>
          <ValueCard icon="growth" title="Always Learning"></ValueCard>
        </div>
      </section>
      <section className=" pr-12 pl-12 xl:pl-0 xl:pr-0 min-h-[65vh] mb-8 ">
        <h2 id="GetInTouch" className="mt-20 w-max text-[2.5rem] lg:text-[4.5rem] lg:leading-24 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab] max-w-[100%]   lg:max-w-[70%]">
          GET IN TOUCH
        </h2>
        <WorkersCard />
      </section>
    </MainLayout>
  );
}
