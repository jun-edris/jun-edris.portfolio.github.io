import content from "../lib/content";

const SoftwareSkills: React.FC = () => {
  const { info } = content;
  return (
    <section className="mt-10 lg:mt-24">
      <h2 className="text-sky-300 text-lg mb-7 lg:text-center">
        Technologies that I use
      </h2>
      <ul className="flex items-center flex-wrap lg:justify-center gap-6 lg:gap-9 ">
        {info.skills.map((skill, index) => {
          return (
            <li key={index}>
              <skill.Icon
                size={45}
                className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SoftwareSkills;
