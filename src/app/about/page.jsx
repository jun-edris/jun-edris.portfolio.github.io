import Box from "@/components/box";
import { CgGames } from "react-icons/cg";
import { LiaGuitarSolid } from "react-icons/lia";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { GrArticle } from "react-icons/gr";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { MdOutlineLocalMovies } from "react-icons/md";

const About = () => {
  return (
    <section className="h-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <Box className="row-span-1 col-span-full xl:place-self-center sm:col-span-2 lg:col-span-1 xl:col-span-2 border-0 bg-transparent">
        <h1 className=" text-5xl leading-[1.5] font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-cyan-300 via-zinc-200 to-orange-400">
          About Me
        </h1>
      </Box>
      <Box
        video="galaxy"
        className="row-span-1 col-span-full sm:col-span-2 xl:col-span-1 h-[150px] lg:h-full"
      />

      <Box className="col-span-full xl:col-span-3">
        <p className="text-lg text-gray-300">
          Hi, I&apos;m Junaire Edris Buico, a dedicated frontend developer with
          a solid two-year background in web development. Currently serving as a
          Web Designer in a BPO company, I&apos;m passionate about coding and
          have extended my expertise to freelancing, specializing in full-stack
          development, particularly in the MERN stack. Proficient in HTML, CSS,
          and Javascript, I&apos;ve successfully delivered web apps using
          ReactJS and NodeJs in various freelance and side projects. Resilient
          and collaborative, I thrive in handling multiple projects
          simultaneously. Despite my relatively short time in the industry, I
          guarantee unwavering commitment and exceptional results in every
          endeavor.
        </p>

        <div className="mt-8">
          <h4 className="text-xl leading-[1.5] font-bold">Experience</h4>
          <div className="mt-5 flex flex-col md:flex-row gap-4">
            <Box
              video="glitch"
              className="flex-1 flex items-stretch justify-stretch relative box-border overflow-hidden"
            >
              <div className="z-20 w-full">
                <div className="h-[110px] flex items-center justify-center">
                  <Image
                    src="https://www.personiv.com/wp-content/uploads/2021/01/personiv-eclerx-vert-rev.png"
                    alt="Personiv Logo"
                    width={150}
                    height={100}
                  />
                </div>

                <h5 className="mt-5 text-[.9rem] leading-[1.5] font-bold text-center">
                  Personiv Manila
                </h5>
                <span className="block italic text-[.8rem] text-center">
                  Web Designer - Analyst
                </span>
                <span className="block text-sm text-gray-300 text-center">
                  June 2012 &ndash; Present
                </span>
              </div>
            </Box>
            <Box
              video="glitch"
              glass={false}
              className="flex-1 flex items-stretch justify-stretch relative box-border overflow-hidden"
            >
              <div className="z-20 w-full">
                <div className="h-[110px] flex items-center justify-center">
                  <Image
                    src="https://bisu.edu.ph/wp-content/uploads/2022/05/cropped-logo_favicon.png"
                    alt="BISU Logo"
                    width={80}
                    height={100}
                  />
                </div>

                <h5 className="mt-5 text-[.9rem] leading-[1.5] font-bold text-center">
                  Bohol Island State University - Balilihan Campus
                </h5>
                <span className="block italic text-[.8rem] text-center">
                  Full Stack Web Developer - Intern
                </span>
                <span className="block text-sm text-center">
                  April 2022 &ndash; June 2022
                </span>
              </div>
            </Box>
          </div>
        </div>
      </Box>
      <Box className="col-span-full xl:col-span-2 flex flex-col justify-between xl:col-start-4 xl:row-start-1 xl:row-end-3">
        <section>
          <h4 className="text-xl leading-[1.5] font-bold">Education</h4>
          <div className="h-auto mt-2">
            <Image
              src="https://bisu.edu.ph/wp-content/uploads/2022/05/cropped-logo_favicon.png"
              alt="BISU Logo"
              width={80}
              height={100}
            />
          </div>
          <div>
            <h5 className="mt-3 leading-[1.5] font-bold">
              Bohol Island State University - Balilihan Campus
            </h5>
            <span className="italic">
              Bachelor of Science in Information Technology
            </span>
            <span className="block text-sm text-gray-300">
              June 2018 &ndash; June 2022
            </span>
          </div>
          <div className="mt-8">
            <h6 className="text-lg leading-[1.5] font-semibold">
              Achievements
            </h6>
            <ul className="mt-3 list-inside">
              <li>
                <span className="text-white me-3 text-lg">★</span>Won 1st place
                at a C language coding competition.
              </li>
              <li>
                <span className="text-white me-3 text-lg">★</span>Earned Special
                Recognition in Campus Website Development.
              </li>
              <li>
                <span className="text-white me-3 text-lg">★</span>
                Graduated as Proficient Student Awardee in Web Development.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h4 className="text-xl leading-[1.5] font-bold mt-10">Hobbies</h4>
          <div className="mt-3 flex  justify-evenly flex-wrap gap-x-4 gap-y-8">
            <div className="flex flex-col items-center gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <FaCode size={24} />
              </span>
              Coding
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <CgGames size={24} />
              </span>
              Playing Video Games
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <LiaGuitarSolid size={24} />
              </span>
              Playing Guitar
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <MdOutlineLocalMovies size={24} />
              </span>
              Watching Movies
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <HiOutlineMusicalNote size={24} />
              </span>
              Listening Music
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="p-2 border border-gray-700 rounded-full inline-block">
                <GrArticle size={24} />
              </span>
              Reading Tech Articles
            </div>
          </div>
        </section>
      </Box>

      {/* <Box className="row-span-1 col-span-full border-0 rounded-none bg-transparent">
        <h2 className="text-3xl leading-[1.5] font-extrabold ">Experience</h2>
      </Box>
      <Box className="col-span-full flex items-stretch justify-stretch gap-4 md:p-0 border-0 box-border w-full">
        <Box
          video="glitch"
          className="flex-1 flex items-stretch justify-stretch relative box-border overflow-hidden"
        >
          <div className="z-20 w-full">
            <div className="h-[150px] flex items-center justify-center">
              <Image
                src="https://www.personiv.com/wp-content/uploads/2021/01/personiv-eclerx-vert-rev.png"
                alt="Personiv Logo"
                width={250}
                height={100}
              />
            </div>

            <h5 className="mt-5 text-xl leading-[1.5] font-bold text-center">
              Personiv Manila
            </h5>
            <span className="block italic text-center">
              Web Designer - Analyst
            </span>
          </div>
        </Box>
        <Box
          video="glitch"
          glass={false}
          className="flex-1 flex items-stretch justify-stretch relative box-border overflow-hidden"
        >
          <div className="z-20 w-full">
            <div className="h-[150px] flex items-center justify-center">
              <Image
                src="https://bisu.edu.ph/wp-content/uploads/2022/05/cropped-logo_favicon.png"
                alt="BISU Logo"
                width={130}
                height={100}
              />
            </div>

            <h5 className="mt-5 text-xl leading-[1.5] font-bold text-center">
              Bohol Island State University - Balilihan Campus
            </h5>
            <span className="block italic text-center">
              Full Stack Web Developer - Intern
            </span>
          </div>
        </Box>
      </Box> */}
    </section>
  );
};

export default About;
