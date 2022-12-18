import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import MKV from './components/MKV';
import ParticleContainer from './components/ParticleContainer';
import Projects from './components/Projects';
import Socials from './components/Socials';
import SoftwareSkills from './components/SoftwareSkills';
import Work from './components/Work';

const App = () => {
	return (
		<div className="grid w-full bg-slate-900 h-full box-border relative pb-10">
			<ParticleContainer />

			<header className=" relative ">
				<div className="lg:pt-10">
					<div className="my-auto flex items-center justify-between py-6 lg:py-0">
						<div className="container lg:mx-auto grow px-6 lg:px-28">
							<a href="/">
								<img src="./Logo.svg" alt="Logo" className="w-[35px]" />
							</a>
						</div>
						<div className="fixed left-auto z-[50] right-0 hidden xl:flex items-center m-0 p-0 gap-5 after:content-[''] after:block after:w-[50px] after:h-[1px] after:mx-auto after:my-0 after:bg-white text-white">
							<a
								href="./Junaire Edris Buico_CV.pdf"
								target="__blank"
								className="block border border-white py-3 px-5 bg-slate-900 text-white hover:text-black hover:bg-white transition ease-in duration-75"
							>
								Download My Resume
							</a>
						</div>
					</div>
				</div>
			</header>
			<Socials />
			<main className="xl:container lg:mx-auto z-[10] px-6 md:px-8 lg:px-28 relative">
				<MKV />
				<About />
				<SoftwareSkills />

				<Education />
				<Work />
				<Projects />
			</main>
			<Footer />
		</div>
	);
};

export default App;
