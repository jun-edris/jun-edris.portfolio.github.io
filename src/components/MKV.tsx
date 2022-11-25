const MKV: React.FC = () => {
	return (
		<section className="mt-24 lg:mt-72">
			<span className=" text-sm mb-2 block text-sky-300">Developer</span>
			<h1 className="text-white text-4xl lg:text-6xl font-black mb-3 xl:w-[700px] text-wrap">
				Need help to connect to tech?
			</h1>
			<p className="xl:w-[650px] text-wrap text-gray-400 my-5 text-sm sm:text-base">
				I'm a Fullstack Web Developer residing in Philppines specializing in
				building MERN stack web apps. Currently, I'm working as a Web Designer
				to gain experience in Frontend.
			</p>
			<div className="flex gap-x-4 items-center">
				<a
					href="tel:+63 915 846 3439"
					target="__blank"
					className="border inline-block border-white py-2 px-3 md:py-3 md:px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
				>
					Call Me
				</a>
				<a
					href="./Junaire Edris Buico_CV.pdf"
					target="__blank"
					className="block xl:hidden border border-white py-2 px-3 md:py-3 md:px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
				>
					Download My Resume
				</a>
			</div>
		</section>
	);
};

export default MKV;
