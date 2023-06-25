import { BiLinkExternal } from "react-icons/bi";
import content from "../lib/content";

const Projects = () => {
  const { projects } = content;
  return (
    <div>
      <section className="mt-56 lg:mt-96">
        <h2 className="text-white text-4xl font-semibold">My Works</h2>
        {projects.map((project) => (
          <div className="mt-20 relative flex flex-col items-center lg:flex-row odd:lg:flex-row-reverse w-full gap-x-14">
            <div className="w-full">
              <a
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                className="w-1/2 h-full relative z-[1] after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300"
              >
                <div
                  className={`relative w-full h-96 rounded-lg bg-cover bg-no-repeat bg-top before:content-[''] before:absolute before:w-full before:h-full before:bg-sky-900/60 hover:before:bg-transparent before:bg-cover before:bg-no-repeat before:bg-center before:transition-all before:rounded-lg before:duration-0 before:hover:duration-300 overflow-hidden`}
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="h-full w-full"
                  />
                </div>
              </a>
            </div>
            <div className="w-full py-10">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-3xl font-bold text-white">
                  {project.name}
                </h3>
                <div className="">
                  <a href={project.link}>
                    <BiLinkExternal className="text-white text-2xl hover:text-sky-300 transition ease duration-200" />
                  </a>
                </div>
              </div>

              <div className="mt-4 relative w-full bg-sky-300 px-8 py-6 rounded-lg after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300">
                <p>{project.desc}</p>
              </div>
              <div className="mt-12 flex gap-x-5 gap-y-2 flex-wrap text-white text-sm px-8">
                {project.techUsed.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
