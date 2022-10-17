import Header from './components/Header';
import MKV from './components/MKV';

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
		</div>
	);
};

export default App;
