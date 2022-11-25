const MKV: React.FC = () => {
	return (
		<div className="xl:py-[200px] py-[90px] xl:container px-4 mx-auto xl:px-0">
			<div className="relative z-[2]">
				<span className="text-white text-lg mb-2 block">Web Developer</span>
				<h1 className="text-white text-5xl font-black mb-3 xl:w-[500px] text-wrap">
					Need help to connect to tech?
				</h1>
				<div className="p-2 bg-white w-[35px] mb-5"></div>
				<div className="flex flex-col items-start xl:flex-row gap-y-3 xl:gap-y-0 xl:gap-x-5">
					<a
						href="tel:+63 915 846 3439"
						target="__blank"
						className="border-4 border-white py-3 px-5 text-white bg-slate-800 hover:text-black hover:bg-white transition ease-in duration-75"
					>
						Call Me Now
					</a>
					<a
						href="./Junaire Edris Buico_CV.pdf"
						target="__blank"
						className="border-4 border-white py-3 px-5 bg-slate-800 text-white hover:text-black hover:bg-white transition ease-in duration-75"
					>
						Download My Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default MKV;
