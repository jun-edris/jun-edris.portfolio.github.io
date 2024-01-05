import Box from '@/components/box'
import Button from '@/components/button'
import { IoLogoJavascript } from 'react-icons/io5'
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
  SiTypescript
} from 'react-icons/si'
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass
} from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

export default function Home() {
  return (
    <section className="mt-10 grid h-full grid-cols-1 gap-4 md:grid-cols-4">
      <Box className="col-span-1 row-span-1 box-border flex items-center md:col-span-4 xl:col-span-3">
        <h1 className="text-4xl font-black leading-[1.5] text-slate-100 md:text-4xl md:leading-[1.5] lg:text-5xl lg:leading-[1.5]">
          <span className="inline-block">
            Transforming Ideas into Reality:{' '}
            <span className="inline-block">
              Your{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-zinc-200 to-orange-400 bg-clip-text text-transparent">
                Web Development
              </span>{' '}
              Visionary
            </span>
          </span>
        </h1>
      </Box>

      <Box className="col-span-full flex h-full flex-col justify-between sm:h-[600px] md:col-span-2 md:h-full lg:col-span-2 xl:col-span-1 xl:col-start-4 xl:col-end-5 xl:row-span-3">
        <div className="">
          <div className="">
            <span className=" block font-medium">Languages I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaHtml5 size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaCss3Alt size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <IoLogoJavascript size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiTypescript size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaPhp size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaJava size={24} />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <span className=" block font-medium">Web Framework I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaReact size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiNextdotjs size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiJquery size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiExpress size={24} />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <span className=" block font-medium">CSS Tech I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiTailwindcss size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaBootstrap size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiMaterialdesign size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaSass size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiAntdesign size={24} />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <span className=" block font-medium">Other Tech I use</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <FaNodeJs size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiMongodb size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
                <SiMysql size={24} />
              </span>
              <span className="inline-block rounded-full border border-gray-700 p-2">
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
        className="relative col-span-full row-start-2 row-end-2 h-[500px] bg-[url('./../../public/me.webp')] bg-cover bg-center bg-no-repeat p-0 md:col-span-2 md:h-full md:bg-top md:p-0 lg:col-span-2 lg:row-end-5 xl:col-span-1 xl:row-end-4"
        glass={false}
      >
        <Box
          glass={false}
          className="group/details flex h-full items-end justify-start border-0 bg-gradient-to-r from-cyan-100/50 via-zinc-100/30 to-orange-100/90 backdrop-blur-md transition-all duration-500 hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent hover:backdrop-blur-none"
        >
          <div className="pb-16 transition-all duration-500 group-hover/details:hidden">
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
      <Box className="col-span-full row-start-4 row-end-4 flex h-full items-end bg-gradient-to-r from-cyan-950/50 via-zinc-800/30 to-orange-700/30 md:col-span-2 md:row-start-3 md:row-end-3 lg:col-span-2 lg:col-start-3 lg:col-end-5 lg:row-start-4 lg:row-end-4 xl:col-span-1 xl:col-start-2 xl:col-end-2 xl:row-start-auto xl:row-end-auto">
        <div className="">
          <p className="pr-5 text-white">
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
        className="col-span-full row-start-3 row-end-3 h-[150px] md:col-span-2 md:row-start-auto md:row-end-auto md:h-full lg:row-start-3 lg:row-end-3 lg:h-[80px] xl:col-span-1 xl:row-start-auto xl:row-end-auto xl:h-full"
      />
      <div className="col-span-full grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:col-span-2 xl:grid-cols-5">
        <Box
          video="galaxy"
          className="col-span-full h-[150px] md:col-span-1 md:h-full lg:col-span-1 lg:col-start-1 lg:h-[150px] xl:col-span-1 xl:h-full"
        />
        <Box
          video="glitch"
          className="relative col-span-full row-span-1 box-border flex items-center justify-center overflow-hidden md:col-span-2 lg:col-span-3 xl:col-span-4"
          glass={false}
        >
          <div className="z-20">
            <span className="block text-center text-xl font-medium">
              Contact Me through
            </span>
            <div className="mt-3 space-x-3 md:mt-5">
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
  )
}
