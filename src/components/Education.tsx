import content from "../lib/content";

const Education = () => {
  const { educationInfo } = content;
  return (
    <>
      {educationInfo.schools.map((school) => (
        <section className="mt-52 lg:mt-96 flex flex-col-reverse lg:flex-row gap-x-6 items-center">
          <div className="w-full">
            <h3 className="text-white text-4xl font-bold mb-5 md:mb-10 text-wrap">
              Where I've studied
            </h3>
            <ul className=" text-white">
              <li>
                <span className="block text-white text-xl md:text-2xl font-semibold">
                  {school.course}
                </span>
                <span className="block text-sky-300 italic text-lg">
                  {school.schoolName}
                </span>

                <span className="block text-gray-300 text-sm">
                  {school.yearsStudied}
                </span>

                <div className="mt-5">
                  <span className="block text-sky-300 text-base">
                    Achievements
                  </span>
                  <ul className="list-disc text-white list-outside pl-10">
                    {school.achievements.map((achievement) => (
                      <li className="text-white text-sm mt-2">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full hidden lg:block">
            <img
              src={school.logo}
              alt={school.schoolName}
              className="w-full h-full"
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default Education;
