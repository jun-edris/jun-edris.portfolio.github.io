import Box from "@/components/box";
import Button from "@/components/button";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4 h-full mt-10">
      <Box className="row-span-1 col-span-full md:col-span-2 md:place-self-center sm:col-span-2 lg:col-span-1 xl:col-span-2 border-0 bg-transparent">
        <h1 className="text-5xl leading-[1.5] font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-cyan-300 via-zinc-200 to-orange-400">
          Projects
        </h1>
      </Box>
      <Box
        video="galaxy"
        className="relative box-border row-span-1 col-span-full md:col-span-2 xl:col-span-3 h-[150px] lg:h-full"
      />

      <Box
        glass={false}
        className="col-span-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:h-[500px] p-0 md:p-0 border-0 box-border"
      >
        <Box className="h-[220px] col-span-full md:col-span-1 xl:h-full group/project1 transition-all duration-1000 flex flex-col items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/pokemon.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full h-full rounded-xl lg:rounded-t-none flex flex-row justify-end items-center group-hover/project1:bg-gradient-to-r from-white/50 via-slate-200/50 to-slate-400/50 lg:h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project1:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-2xl font-black group-hover/project1:visible w-full">
                Pokemon
              </h5>
            </div>
            <Button
              iconB
              className="p-3 lg:p-4 place-self-end"
              href="https://pokedex-zone.vercel.app/"
              target="_blank"
            >
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
        <Box className="h-[220px] col-span-full md:col-span-1 xl:h-full group/project2 transition-all duration-1000 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/mis.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full h-full rounded-xl lg:rounded-t-none flex flex-row justify-end items-center group-hover/project2:bg-gradient-to-r from-white/50 via-slate-200/50 to-slate-400/50 lg:h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project2:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-2xl font-black group-hover/project2:visible w-full">
                MIS Helpdesk
              </h5>
            </div>
            <Button
              iconB
              className="p-3 lg:p-4 place-self-end"
              href="https://mis-helpline.onrender.com/"
              target="_blank"
            >
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
        <Box className="h-[220px] col-span-full md:col-span-1 xl:h-full group/project3 transition-all duration-1000 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/weather.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full h-full rounded-xl lg:rounded-t-none flex flex-row justify-end items-center group-hover/project3:bg-gradient-to-r from-white/50 via-slate-200/50 to-slate-400/50 lg:h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project3:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-2xl font-black group-hover/project3:visible w-full">
                Weather Web App
              </h5>
            </div>
            <Button
              iconB
              className="p-3 lg:p-4 place-self-end"
              href="https://weather-app-jun-edris.vercel.app/"
              target="_blank"
            >
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
        <Box className="h-[220px] col-span-full md:col-span-1 xl:h-full group/project4 transition-all duration-1000 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/formbuilder.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full h-full rounded-xl lg:rounded-t-none flex flex-row justify-end items-center group-hover/project4:bg-gradient-to-r from-white/50 via-slate-200/50 to-slate-400/50 lg:h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project4:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-2xl font-black group-hover/project3:visible w-full">
                Form Builder
              </h5>
            </div>
            <Button
              iconB
              className="p-3 lg:p-4 place-self-end"
              href="https://form-builder-jun-edris.vercel.app/"
              target="_blank"
            >
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
      </Box>
      <div className="col-span-full grid grid-cols-3">
        <Box
          video="glitch"
          className="relative box-border col-span-1 h-[150px] lg:h-full"
        />
        <Box className="col-span-1 md:place-self-center border-0 bg-transparent">
          <h3 className="text-3xl leading-[1.5] font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-cyan-300 via-zinc-200 to-orange-400">
            Web Designs
          </h3>
        </Box>
        <Box
          video="glitch"
          className="relative box-border col-span-1 h-[150px] lg:h-full"
        />
      </div>
    </section>
  );
};

export default Projects;
