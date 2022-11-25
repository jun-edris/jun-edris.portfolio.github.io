import React from 'react';

type Props = {};

const Education = (props: Props) => {
	return (
		<section className="mt-52 lg:mt-96 flex flex-col-reverse lg:flex-row gap-x-6 items-center">
			<div className="w-full">
				<h3 className="text-white text-4xl font-bold mb-10 text-wrap">
					Where I've studied
				</h3>

				<ul className=" text-white">
					<li>
						<span className="block text-white text-2xl font-semibold">
							Bachelor of Science in Information Technology
						</span>
						<span className="block text-sky-300 italic text-lg">
							Bohol Island State University - Balilihan Campus
						</span>

						<span className="block text-gray-300 text-sm">2018 - 2022</span>

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
			<div className="w-full hidden lg:block">
				<img
					src="./BISU-LOGO.png"
					alt="Bohol Island State University"
					className="w-full h-full"
				/>
			</div>
		</section>
	);
};

export default Education;
