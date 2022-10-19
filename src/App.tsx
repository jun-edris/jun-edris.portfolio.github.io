import Header from './components/Header';
import MKV from './components/MKV';
import SoftwareSkills from './components/SoftwareSkills';

const App = () => {
	return (
		<div className="w-full h-screen ">
			{/* <div className="bg-hero bg-no-repeat bg-cover bg-top bg-kv w-full h-[900px] bg-opacity-40 backdrop-blur-sm">
				<Header />
			</div> */}
			<div className="w-full xl:h-[800px] h-auto bg-slate-800">
				<Header />
				<MKV />
			</div>
			<main className="w-full">
				<div className="flex sm:container flex-col lg:items-center xl:items-end sm:mx-auto xs:mt-[-45px] lg:mt-[-50px] xl:mt-[-125px] px-2 md:px-0">
					<div className="">
						<SoftwareSkills />
					</div>
				</div>
				<div className="container mx-auto"></div>
			</main>
		</div>
	);
};

export default App;
