import React from 'react';

type Props = {};

const About = (props: Props) => {
	return (
		<section className="mt-52 lg:mt-96 flex">
			{/* <div className="w-full hidden lg:block"></div> */}
			<div className="w-full">
				<h2 className="text-white text-4xl lg:text-6xl font-bold mb-3 text-wrap">
					About Me
				</h2>
				<p className=" text-wrap text-gray-400 my-5 text-sm sm:text-base">
					Hello! My name is{' '}
					<strong className="text-sky-300">Junaire Edris</strong> and I love
					creating things on the internet. My forte is web development, I didn't
					realize it until I was in my 3rd year in college when pandemic came
					and also when we are creating our capstone project. At that time
					because of the pressure of graduating college, I taught myself the
					basics of web development with the guidance of our instructor. It
					really helped me a lot but because of curiousity I learn{' '}
					<strong className="text-sky-300">React</strong> and it's fundamentals
					and it was the best journey that I had throughout my learning process.
				</p>
				<p className="text-wrap text-gray-400 my-5 text-sm sm:text-base">
					Today, gratefully I'm working as a{' '}
					<strong className="text-sky-300">Web Designer</strong> at a BPO
					company. for me to learn more about business type of websites and also
					how to follow design instructions from the clients. Although, being a
					developer and dealing and working with codes is what I am dreaming to
					be. Still slow process is still a process. I would not stop until I
					became one and to work what I really love
				</p>
			</div>
		</section>
	);
};

export default About;
