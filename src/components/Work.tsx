import React from 'react';

type Props = {};

const Worked = (props: Props) => {
	return (
		<section className="mt-52 lg:mt-96 ">
			<h3 className="text-white text-4xl font-bold mb-10 text-wrap">
				Where I've worked
			</h3>
			<div className="flex flex-col lg:flex-row gap-x-6">
				<div className="w-full">
					<span className="block text-white text-2xl font-semibold mb-2">
						Web Designer
					</span>
					<span className="block text-sky-300 italic text-md">
						Personiv Manila
					</span>
					<span className="block text-gray-300 text-sm">07-2022 - present</span>
					<div className="mt-5">
						<span className="block text-sky-300 text-md">What I do</span>
						<ul className="list-disc text-white list-outside pl-10">
							<li className="text-white text-sm mt-2">
								Created a lot of business websites.
							</li>
							<li className="text-white text-sm mt-2">
								Worked with specified instructions from clients through
								consultants.
							</li>
							<li className="text-white text-sm mt-2">
								Learned to use a{' '}
								<strong className="text-sky-300">website builder</strong>.
							</li>
						</ul>
					</div>

					<div className="mt-5">
						<span className="block text-sky-300 text-md">Achievements</span>
						<ul className="list-disc text-white list-outside pl-10">
							<li className="text-white text-sm mt-2">
								Certificate of Completion (Web Design Training)
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full mt-10 lg:mt-0">
					<ul className=" text-white">
						<li>
							<span className="block text-white text-2xl font-semibold mb-2">
								Lead Web Developer Intern
							</span>
							<span className="block text-sky-300 italic text-md">
								Bohol Island State University - Balilihan Campus
							</span>
							<span className="block text-gray-300 text-sm">
								01-2022 - 06-2022
							</span>
							<div className="mt-5">
								<span className="block text-sky-300 text-md">What I do</span>
								<ul className="list-disc text-white list-outside pl-10">
									<li className="text-white text-sm mt-2">
										Created a technical support web app using MERN stack
									</li>
									<li className="text-white text-sm mt-2">
										Worked with project manager and discussing all the
										development process.
									</li>
									<li className="text-white text-sm mt-2">
										Learned to create web app using{' '}
										<strong className="text-sky-300">MERN </strong>stack.
									</li>
								</ul>
							</div>

							<div className="mt-5">
								<span className="block text-sky-300 text-md">Achievements</span>
								<ul className="list-disc text-white list-outside pl-10">
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
			</div>
		</section>
	);
};

export default Worked;
