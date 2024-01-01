import Box from "@/components/box";
import Button from "@/components/button";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-5 gap-4 h-full mt-10">
      <Box className="row-span-1 col-span-full xl:place-self-center sm:col-span-2 lg:col-span-1 xl:col-span-2 border-0 bg-transparent">
        <h1 className=" text-5xl leading-[1.5] font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-cyan-300 via-zinc-200 to-orange-400">
          Projects
        </h1>
      </Box>
      <Box
        video="galaxy"
        className="relative box-border row-span-1 col-span-full xl:col-span-3 h-[150px] lg:h-full"
      />

      <Box className="col-span-full flex items-stretch justify-stretch gap-4 h-[500px] md:p-0 border-0 box-border w-full">
        <Box className="group/project1 w-full flex-1 hover:flex-[3] transition-all duration-1000 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/pokemon.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full rounded-t-none flex flex-row items-center h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project1:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-3xl font-black group-hover/project1:visible w-full">
                Pokemon
              </h5>
            </div>
            <Button iconB className="p-4">
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
        <Box className="group/project2 w-auto flex-1 hover:flex-[3] transition-all duration-1000 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/mis.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full rounded-t-none flex flex-row items-center h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project2:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-3xl font-black group-hover/project2:visible w-full">
                MIS Helpdesk
              </h5>
            </div>
            <Button iconB className="p-4">
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
        <Box className="group/project3 w-auto flex-1 hover:flex-[3] transition-all duration-1000 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/mis.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full rounded-t-none flex flex-row items-center h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project3:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-3xl font-black group-hover/project3:visible w-full">
                Weather Web App
              </h5>
            </div>
            <Button iconB className="p-4">
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
        <Box className="group/project4 w-auto flex-1 hover:flex-[3] transition-all duration-1000 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/mis.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full rounded-t-none flex flex-row items-center h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project4:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-3xl font-black group-hover/project4:visible w-full">
                Pokemon
              </h5>
            </div>
            <Button iconB className="p-4">
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
        <Box className="group/project5 w-auto flex-1 hover:flex-[3] transition-all duration-700 flex items-end justify-end bg-cover bg-center bg-no-repeat bg-[url('./../../public/mis.webp')] p-0 md:p-0">
          <Box
            glass={false}
            className="w-full rounded-t-none flex flex-row items-center h-[100px] border-0 transition-all duration-500"
          >
            <div className="w-full flex items-center justify-center group-hover/project5:visible invisible transition-[visible] duration-500">
              <h5 className="text-black text-3xl font-black group-hover/project5:visible w-full">
                Pokemon
              </h5>
            </div>
            <Button iconB className="p-4">
              <BsArrowUpRight size={28} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="col-span-full"></Box>
    </section>
  );
};

export default Projects;
