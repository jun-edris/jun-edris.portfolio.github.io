import React from 'react';

type Props = {};

const Worked = (props: Props) => {
	return (
		<section className="mt-52 lg:mt-96">
			<h3 className="text-white text-4xl font-bold mb-5 md:mb-10 text-wrap">
				Where I've worked
			</h3>
			<div className="flex flex-col lg:flex-row gap-x-14">
				<div className="relative w-full mt-10 lg:mt-0 bg-sky-300 rounded-lg px-6 py-8 after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-300">
					<span className="block text-slate-900 text-2xl font-semibold mb-2">
						Web Designer
					</span>
					<span className="block text-slate-700 italic">Personiv Manila</span>
					<span className="block text-zinc-800 text-sm">07-2022 - present</span>
					<div className="mt-5">
						<span className="block text-slate-900">What I do</span>
						<ul className="list-disc text-gray-800 list-outside pl-10">
							<li className=" text-sm mt-2">
								Created a lot of business websites.
							</li>
							<li className=" text-sm mt-2">
								Worked with specified instructions from clients through
								consultants.
							</li>
							<li className=" text-sm mt-2">
								Learned to use a{' '}
								<strong className="text-slate-900">website builder</strong>.
							</li>
						</ul>
					</div>

					<div className="mt-5">
						<span className="block text-slate-900">Achievements</span>
						<ul className="list-disc list-outside pl-10">
							<li className=" text-sm mt-2">
								Certificate of Completion (Web Design Training)
							</li>
						</ul>
					</div>
				</div>
				<div className="relative w-full mt-10 lg:mt-0 bg-sky-300 rounded-lg px-6 py-8 after:content-[''] after:block after:absolute after:z-[-1] after:h-full after:top-[20px] after:left-[20px] after:border-2 after:border-sky-300 after:w-full after:rounded-lg hover:after:top-[18px] hover:after:left-[18px] transition ease-in-out duration-500">
					<ul className=" text-white">
						<li>
							<span className="block text-slate-900 text-2xl font-semibold mb-2">
								Lead Web Developer Intern
							</span>
							<span className="block text-slate-700 italic mb-1">
								Bohol Island State University - Balilihan Campus
							</span>
							<span className="block text-zinc-800 text-sm">
								01-2022 - 06-2022
							</span>
							<div className="mt-5">
								<span className="block text-slate-900">What I do</span>
								<ul className="list-disc text-gray-800 list-outside pl-10">
									<li className="text-sm mt-2">
										Created a technical support web app using MERN stack
									</li>
									<li className=" text-sm mt-2">
										Worked with project manager and discussing all the
										development process.
									</li>
									<li className=" text-sm mt-2">
										Learned to create web app using{' '}
										<strong className="text-slate-900">MERN </strong>stack.
									</li>
								</ul>
							</div>

							<div className="mt-5">
								<span className="block text-slate-900">Achievements</span>
								<ul className="list-disc text-slate-900 list-outside pl-10">
									<li className=" text-sm mt-2">
										Special Recognition in Campus Website Development
									</li>
									<li className=" text-sm mt-2">
										Proficient Student Awardee in Web Development
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Worked;
