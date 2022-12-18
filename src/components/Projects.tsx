import { BiLinkExternal } from 'react-icons/bi';

type Props = {};

const Projects = (props: Props) => {
	return (
		<div>
			<section className="mt-56 lg:mt-96">
				<h2 className="text-white text-4xl font-semibold">My Works</h2>
				<div className="mt-20 relative flex flex-col items-center lg:flex-row w-full gap-x-14">
					<div className="w-full">
						<a
							href="https://mis-helpline.onrender.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="w-1/2 h-full relative z-[1] after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300"
						>
							<div className="relative bg-[url('../public/project1.png')] w-full h-96 rounded-lg bg-cover bg-no-repeat bg-top before:content-[''] before:absolute before:w-full before:h-full before:bg-sky-900/60 hover:before:bg-transparent before:bg-cover before:bg-no-repeat before:bg-center before:transition-all before:rounded-lg before:duration-0 before:hover:duration-300"></div>
						</a>
					</div>
					<div className="w-full py-10">
						<div className="flex flex-row justify-between items-center">
							<h3 className="text-3xl font-bold text-white">MIS Helpline</h3>
							<div className="">
								<a href="https://mis-helpline.onrender.com/">
									<BiLinkExternal className="text-white text-2xl hover:text-sky-300 transition ease duration-200" />
								</a>
							</div>
						</div>

						<div className="mt-4 relative w-full bg-sky-300 px-8 py-6 rounded-lg after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300">
							<p>
								A technical support web app that provides online assistance to
								the staff or users inside the institution who are experiencing
								technical problems with their devices, software, data, or other
								concerns.
							</p>
						</div>
						<div className="mt-12 flex gap-x-5 gap-y-2 flex-wrap text-white text-sm px-8">
							<span>ReactJs</span>
							<span>MongoDB</span>
							<span>MaterialUI</span>
							<span>Express</span>
							<span>Render</span>
							<span>PusherJs</span>
							<span>JWT Authentication</span>
						</div>
					</div>
				</div>
				<div className="mt-16 relative flex flex-col items-center lg:flex-row w-full gap-x-14">
					<div className="w-full py-10">
						<div className="flex flex-row justify-between items-center">
							<h3 className="text-3xl font-bold text-white">
								Cebu Province Weather App
							</h3>
							<div className="">
								<a href="https://weather-app-jun-edris.vercel.app/">
									<BiLinkExternal className="text-white text-2xl hover:text-sky-300 transition ease duration-200" />
								</a>
							</div>
						</div>

						<div className="mt-4 relative w-full bg-sky-300 px-8 py-6 rounded-lg after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300">
							<p>
								A side project web app where I practiced the OpenWeatherMap API.
								This web app provides information about the weather in Cebu,
								Philippines. Overall, a weather web app for Cebu can be a useful
								tool for anyone living in or visiting the city. It helps users
								stay informed about the weather and make plans accordingly,
								whether they are going to work, school, or on vacation.
							</p>
						</div>
						<div className="mt-12 flex gap-x-5 gap-y-2 flex-wrap text-white text-sm px-8">
							<span>ReactJs</span>
							<span>TailwindCSS</span>
							<span>Vercel</span>
						</div>
					</div>
					<div className="w-full">
						<a
							href="https://mis-helpline.onrender.com/"
							rel="noopener noreferrer"
							target="_blank"
							className="w-1/2 h-full relative z-[1] after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300"
						>
							<div className="relative bg-[url('../public/project2.png')] w-full h-96 rounded-lg bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:w-full before:h-full before:bg-sky-900/60 hover:before:bg-transparent before:bg-cover before:bg-no-repeat before:bg-center before:transition-all before:rounded-lg before:duration-0 before:hover:duration-300"></div>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
