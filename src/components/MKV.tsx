import content from "../lib/content";

const MKV: React.FC = () => {
  const { info, mkv } = content;
  return (
    <section className="mt-24 lg:mt-72">
      <span className=" text-sm mb-2 block text-sky-300">{mkv.wantToBe}</span>
      <h1 className="text-white text-4xl lg:text-6xl font-black mb-3 xl:w-[700px] text-wrap">
        {mkv.headerText}
      </h1>
      <p className="xl:w-[650px] text-wrap text-gray-400 my-5 text-sm sm:text-base">
        {mkv.introduction}
      </p>
      <div className="flex gap-x-4 items-center">
        <a
          href="tel:+63 915 846 3439"
          className="border inline-block border-white py-2 px-3 md:py-3 md:px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
        >
          Call Me
        </a>
        <a
          href={`/${info.resume}`}
          download={info.resume}
          className="block xl:hidden border border-white py-2 px-3 md:py-3 md:px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default MKV;
