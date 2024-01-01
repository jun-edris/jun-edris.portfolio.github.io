import Box from "@/components/box";
import Button from "@/components/button";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAdobephotoshop,
  SiAntdesign,
  SiExpress,
  SiJquery,
  SiMaterialdesign,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full mt-10">
      <Box className="col-span-1 md:col-span-4 row-span-1 xl:col-span-3 flex items-center box-border">
        <h1 className="text-4xl font-black md:text-4xl lg:text-5xl leading-[1.5] md:leading-[1.5] lg:leading-[1.5] text-slate-100">
          <span className="inline-block">
            Transforming Ideas into Reality:{" "}
            <span className="inline-block">
              Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-zinc-200 to-orange-400">
                Web Development
              </span>{" "}
              Visionary
            </span>
          </span>
        </h1>
      </Box>

      <Box className="col-span-full md:col-span-2 lg:col-span-2 xl:col-span-1 xl:row-span-3 xl:col-start-4 xl:col-end-5 flex flex-col justify-between h-[600px] md:h-full">
        <div className="">
          <div className="">
            <span className=" block font-medium">Languages I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaHtml5 size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaCss3Alt size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <IoLogoJavascript size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiTypescript size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaPhp size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaJava size={24} />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <span className=" block font-medium">Web Framework I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaReact size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiNextdotjs size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiJquery size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiExpress size={24} />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <span className=" block font-medium">CSS Tech I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiTailwindcss size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaBootstrap size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiMaterialdesign size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaSass size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiAntdesign size={24} />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <span className=" block font-medium">Other Tech I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaNodeJs size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiMongodb size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiMysql size={24} />
              </span>
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <SiAdobephotoshop size={24} />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="">
            This technologies that I have listed are the stuff I learned
            throughout my university years, small projects from clients, self
            study, and doing code as my hobby.
          </p>
        </div>
      </Box>

      <Box
        className="relative col-span-full lg:col-span-2 md:col-span-2 row-start-2 row-end-2 lg:row-end-5 xl:row-end-4 xl:col-span-1 bg-cover bg-center md:bg-top bg-[url('./../../public/me.webp')] bg-no-repeat h-[500px] md:h-full p-0 md:p-0"
        glass={false}
      >
        <Box
          glass={false}
          className="group/details flex items-end justify-start h-full backdrop-blur-md bg-gradient-to-r from-cyan-100/50 via-zinc-100/30 to-orange-100/90 hover:from-transparent hover:via-transparent hover:to-transparent hover:backdrop-blur-none hover:bg-transparent border-0 transition-all duration-500"
        >
          <div className="group-hover/details:hidden transition-all duration-500 pb-16">
            <p className="text-black">
              I&apos;m a Web Developer residing in Philppines specializing in
              building full stack web apps. Currently, I&apos;m working as a Web
              Designer to gain experience in Frontend development.
            </p>
          </div>
          <Button href="/about" className="absolute mt-3 md:mt-5 ">
            Read more about me
          </Button>
        </Box>
      </Box>
      <Box className="col-span-full md:col-span-2 lg:col-span-2 row-start-4 row-end-4 md:row-start-3 md:row-end-3 lg:row-start-4 lg:row-end-4 xl:row-start-auto xl:row-end-auto lg:col-start-3 lg:col-end-5 xl:col-start-2 xl:col-end-2 xl:col-span-1 flex items-end h-full bg-gradient-to-r from-cyan-950/50 via-zinc-800/30 to-orange-700/30">
        <div className="">
          <p className="text-white pr-5">
            My passion for frontend development and the seamless fusion of
            innovation and design.
          </p>
          <Button href="/projects" className="mt-3 md:mt-5">
            Explore My Work
          </Button>
        </div>
      </Box>
      <Box
        video="galaxy"
        className="col-span-full md:col-span-2 xl:col-span-1 row-start-3 row-end-3 md:row-start-auto md:row-end-auto lg:row-start-3 lg:row-end-3 xl:row-start-auto xl:row-end-auto h-[150px] md:h-full lg:h-[80px] xl:h-full"
      />
      <div className="col-span-full xl:col-span-2 gap-4 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Box
          video="galaxy"
          className="col-span-full md:col-span-1 lg:col-start-1 lg:col-span-1 xl:col-span-1 h-[150px] md:h-full lg:h-[150px] xl:h-full"
        />
        <Box
          video="glitch"
          className="col-span-full md:col-span-2 lg:col-span-3 row-span-1 xl:col-span-4 flex items-center justify-center relative overflow-hidden box-border"
          glass={false}
        >
          <div className="z-20">
            <span className="text-center text-xl block font-medium">
              Contact Me through
            </span>
            <div className="mt-3 md:mt-5 space-x-3">
              <Button
                href="https://github.com/jun-edris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </Button>
              <Button
                href="https://www.linkedin.com/in/junaire-edris-buico-33b93a205"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </Button>
              <Button
                href="mailto:juned.buico@gmail.com"
                className="inline-block"
              >
                <MdEmail size={22} />
              </Button>
              <Button href="tel:+63 915 846 3439" className="inline-block">
                <MdPhone size={22} />
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
}
