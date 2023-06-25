import React from "react";
import content from "../lib/content";

type Props = {};

const Worked = (props: Props) => {
  const { workExperience } = content;

  return (
    <section className="mt-52 lg:mt-96">
      <h3 className="text-white text-4xl font-bold mb-5 md:mb-10 text-wrap">
        Where I've worked
      </h3>
      <div className="flex flex-col lg:flex-row gap-x-14">
        {workExperience.experiences.map((experience) => (
          <div className="relative w-full mt-10 lg:mt-0 bg-sky-300 rounded-lg px-6 py-8 after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300">
            <span className="block text-slate-900 text-2xl font-semibold mb-2">
              {experience.role}
            </span>
            <span className="block text-slate-700 italic">
              {experience.company}
            </span>
            <span className="block text-zinc-800 text-sm">
              {experience.years}
            </span>
            <div className="mt-5">
              <span className="block text-slate-900">What I do</span>
              {experience.descBullets.map((desc) => (
                <ul className="list-disc text-gray-800 list-outside pl-10">
                  <li className=" text-sm mt-2">{desc}</li>
                </ul>
              ))}
            </div>

            <div className="mt-5">
              <span className="block text-slate-900">Achievements</span>
              <ul className="list-disc list-outside pl-10">
                {experience.achievements.map((achievement) => (
                  <li className=" text-sm mt-2">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Worked;
