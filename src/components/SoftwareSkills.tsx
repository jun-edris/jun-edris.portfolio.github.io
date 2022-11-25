import { FaReact, FaNodeJs } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import {
	SiJavascript,
	SiMaterialui,
	SiMongodb,
	SiExpress,
	SiTailwindcss,
	SiBootstrap,
	SiPhp,
	SiPusher,
	SiTypescript,
} from 'react-icons/si';

const SoftwareSkills: React.FC = () => {
	return (
		<section className="mt-10 lg:mt-24">
			<h2 className="text-sky-300 text-lg mb-7 lg:text-center">
				Technologies that I use
			</h2>
			<ul className="flex items-center flex-wrap lg:justify-center gap-6 lg:gap-9 ">
				<li>
					<AiOutlineHtml5
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<DiCss3Full
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiJavascript
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiTypescript
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiPhp
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<FaReact
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<FaNodeJs
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiMongodb
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiExpress
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiMaterialui
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiTailwindcss
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiBootstrap
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
				<li>
					<SiPusher
						size={45}
						className="text-white transition hover:-translate-y-1 inline-block duration-300 hover:text-sky-300"
					/>
				</li>
			</ul>
		</section>
	);
};

export default SoftwareSkills;
