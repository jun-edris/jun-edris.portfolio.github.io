import Header from './components/Header';
import MKV from './components/MKV';
import ParticleContainer from './components/ParticleContainer';
import Socials from './components/Socials';
import SoftwareSkills from './components/SoftwareSkills';

const App = () => {
	return (
		<div className="grid w-full bg-slate-900 h-full box-border relative pb-10">
			<ParticleContainer />
			{/* <div
				aria-orientation="horizontal"
				className="hidden lg:block fixed top-8 left-auto right-0 z-[10]"
			>
				<div className="flex items-center m-0 p-0 gap-5 after:content-[''] after:block after:w-[50px] after:h-[1px] after:mx-auto after:my-0 after:bg-white text-white">
					<a
						href="./Junaire Edris Buico_CV.pdf"
						target="__blank"
						className="border border-white py-3 px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
					>
						Download My Resume
					</a>
				</div>
			</div> */}
			<header className=" relative ">
				<div className="lg:pt-10">
					<div className="my-auto flex items-center justify-between py-6 lg:py-0">
						<div className="container lg:mx-auto grow px-6 lg:px-28">
							<h1 className="text-white py-[2px] my-[8px]">header</h1>
						</div>
						<div className="fixed left-auto right-0 hidden xl:flex items-center m-0 p-0 gap-5 after:content-[''] after:block after:w-[50px] after:h-[1px] after:mx-auto after:my-0 after:bg-white text-white">
							<a
								href="./Junaire Edris Buico_CV.pdf"
								target="__blank"
								className="block border border-white py-3 px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
							>
								Download My Resume
							</a>
						</div>
						{/* <button className="lg:hidden">
							<CgMenuRight
								size={35}
								className="text-white hover:text-sky-300 duration-300"
							/>
						</button> */}
						{/* <a
							href="./Junaire Edris Buico_CV.pdf"
							target="__blank"
							className="border-4 border-white py-3 px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
						>
							Download My Resume
						</a> */}
					</div>
				</div>
			</header>
			<Socials />
			<main className="xl:container lg:mx-auto z-[10] px-6 md:px-8 lg:px-28 relative ">
				<section className="mt-24 lg:mt-72">
					<span className=" text-sm mb-2 block text-sky-300">Developer</span>
					<h1 className="text-white text-4xl lg:text-6xl font-black mb-3 xl:w-[700px] text-wrap">
						Need help to connect to tech?
					</h1>
					<p className="xl:w-[650px] text-wrap text-gray-400 my-5">
						I'm a Fullstack Web Developer residing in Philppines specializing in
						building MERN stack web apps. Currently, I'm working as a Web
						Designer to gain experience in Frontend.
					</p>
					<div className="flex gap-x-4">
						<a
							href="tel:+63 915 846 3439"
							target="__blank"
							className="border inline-block border-white py-3 px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
						>
							Call Me
						</a>
						<a
							href="./Junaire Edris Buico_CV.pdf"
							target="__blank"
							className="block xl:hidden border border-white py-3 px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
						>
							Download My Resume
						</a>
					</div>
				</section>

				<section className="mt-52 lg:mt-96 flex">
					{/* <div className="w-full hidden lg:block"></div> */}
					<div className="w-full">
						<h2 className="text-white text-4xl lg:text-6xl font-bold mb-3 text-wrap">
							About Me
						</h2>
						<p className=" text-wrap text-gray-400 my-5">
							Hello! My name is{' '}
							<strong className="text-sky-300">Junaire Edris</strong> and I love
							creating things on the internet. My forte is web development, I
							didn't realize it until I was in my 3rd year in college when
							pandemic came and also when we are creating our capstone project.
							At that time because of the pressure of graduating college, I
							taught myself the basics of web development with the guidance of
							our instructor. It really helped me a lot but because of
							curiousity I learn <strong className="text-sky-300">React</strong>{' '}
							and it's fundamentals and it was the best journey that I had
							throughout my learning process.
						</p>
						<p className="text-wrap text-gray-400 my-5">
							Today, gratefully I'm working as a{' '}
							<strong className="text-sky-300">Web Designer</strong> at a BPO
							company. for me to learn more about business type of websites and
							also how to follow design instructions from the clients. Although,
							being a developer and dealing and working with codes is what I am
							dreaming to be. Still slow process is still a process. I would not
							stop until I became one and to work what I really love
						</p>
					</div>
				</section>
				<SoftwareSkills />

				<section className="mt-52 lg:mt-96 flex flex-col lg:flex-row gap-x-6">
					<div className="w-full">
						<h3 className="text-white text-4xl font-bold mb-3 text-wrap">
							Where I've studied?
						</h3>

						<ul className=" text-white">
							<li>
								<span className="block text-sky-300 italic text-lg">
									Bohol Island State University - Balilihan Campus
								</span>

								<span className="block text-gray-300 text-sm">2018 - 2022</span>
								<p className="mt-3 text-gray-400">
									I graduated{' '}
									<strong className="text-sky-300">
										Bachelor of Science in Information Technology
									</strong>
									and also created the institution's SCUAA Live Scoring Web App.
								</p>
								<div className="mt-5">
									<span className="block text-sky-300 text-md">
										Achievements
									</span>
									<ul className="list-disc text-white list-outside pl-4">
										<li className="text-white text-sm mt-2">
											Special Recognition in Campus Website Development
										</li>
										<li className="text-white text-sm mt-2">
											Proficient Student Awardee in Web Development
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
					<div className="mt-10 lg:mt-0 w-full">
						<h3 className="text-white text-4xl font-bold mb-3  text-wrap">
							Where I've worked
						</h3>
						<ul className=" text-white">
							<li>
								<span className="block text-sky-300 italic text-lg">
									Personiv Manila
								</span>
								<span className="block text-gray-300 text-sm">
									2022 - present
								</span>
								<p className="mt-3 text-gray-400">
									Worked as a{' '}
									<strong className="text-sky-300">Web Designer</strong>.
									Created a lot of business websites. Learned to use a{' '}
									<strong className="text-sky-300">website builder</strong>.
									Worked with specified instructions from clients through
									consultants.
								</p>

								<div className="mt-5">
									<span className="block text-sky-300 text-md">
										Achievements
									</span>
									<ul className="list-disc text-white list-outside pl-4">
										<li className="text-white text-sm mt-2">
											Certificate of Completion (Web Design Training)
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};

export default App;
