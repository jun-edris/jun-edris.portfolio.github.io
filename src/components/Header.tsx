import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import contents from './../lib/content';

const Header: React.FC = () => {
	const [showNav, setShowNav] = useState<boolean>(false);
	const socialContent = contents.socialMediaLinks;

	const handleChange = () => {
		setShowNav(!showNav);
	};

	return (
		<>
			<div className="relative">
				{/* show only on tablet and desktop */}
				<div className="container mx-auto px-7 xl:px-4 justify-between py-4 hidden xl:flex text-white">
					<div>{socialContent.gmail}</div>
					<div className="flex gap-x-4">
						<span>
							<a href={socialContent.github.url} target="__blank">
								<FontAwesomeIcon icon={socialContent.github.icon} size="xl" />
							</a>
						</span>
						<span>
							<a href={socialContent.linkedin.url} target="__blank">
								<FontAwesomeIcon icon={socialContent.linkedin.icon} size="xl" />
							</a>
						</span>
					</div>
				</div>
				<div className="xl:container mx-auto px-4 py-10 xl:flex items-center justify-between bg-white xl:bg-none xl:h-[90px]">
					<div className="flex justify-between flex-1">
						<div className="xl:hidden">
							<button
								onClick={handleChange}
								className="transition-all ease-in duration-300s"
							>
								{showNav ? (
									<FontAwesomeIcon icon={faXmark} size="xl" />
								) : (
									<FontAwesomeIcon icon={faBars} size="xl" />
								)}
							</button>
						</div>
						<div>logo</div>
						<div className="xl:hidden">
							<a href="tel:+63 915 846 3439">
								<FontAwesomeIcon icon={faPhone} />
							</a>
						</div>
					</div>
					{/* show only on tablet and desktop */}
					<div
						className={`flex flex-col xl:flex-row xl:items-center gap-y-5 xl:gap-y-0 xl:static pb-9 xl:pb-0 pl-5 xl:pl-0 pt-12 xl:py-0  xl:z-[100] xl:w-auto absolute left-0 xl:bg-transparent xl:transition-none xl:opacity-100 transition-all ease-in duration-500s ${
							showNav
								? 'static opacity-100 bg-white w-full'
								: 'opacity-0 bg-white w-full z-[-1]'
						}`}
					>
						<nav>
							<ul
								className={`flex flex-col xl:flex-row xl:items-center gap-y-10 xl:gap-y-0 xl:gap-x-3 `}
							>
								<li className="">
									<a
										href="#aboutMe"
										className="hover:border-4 border-4 border-white relative z-[100] hover:border-black px-3 py-2 bg-white after:content-[''] after:hover:border-4 after:z-[-1] after:border-grey-400 after:px-12 after:w-full after:py-5 after:absolute after:top-[-1px] after:left-3 transition ease-in duration-75"
									>
										About Me
									</a>
								</li>
								<li>
									<a
										href="#projects"
										className="hover:border-4 border-4 border-white relative z-[100] hover:border-black px-3 py-2 bg-white after:content-[''] after:hover:border-4 after:z-[-1] after:border-grey-400 after:px-12 after:w-full after:py-5 after:absolute after:top-[-1px] after:left-3 transition ease-in duration-75"
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href="#workExperience"
										className="hover:border-4 border-4 border-white relative z-[100] hover:border-black px-3 py-2 bg-white after:content-[''] after:hover:border-4 after:z-[-1] after:border-grey-400 after:px-12 after:w-full after:py-5 after:absolute after:top-[-1px] after:left-3 transition ease-in duration-75"
									>
										Work Experience
									</a>
								</li>
								<li>
									<a
										href="#education"
										className="hover:border-4 border-4 border-white relative z-[100] hover:border-black px-3 py-2 bg-white after:content-[''] after:hover:border-4 after:z-[-1] after:border-grey-400 after:px-12 after:w-full after:py-5 after:absolute after:top-[-1px] after:left-3 transition ease-in duration-75"
									>
										Education
									</a>
								</li>
								<li>
									<a
										href="#certificates"
										className="hover:border-4 border-4 border-white relative z-[100] hover:border-black px-3 py-2 bg-white after:content-[''] after:hover:border-4 after:z-[-1] after:border-grey-400 after:px-12 after:w-full after:py-5 after:absolute after:top-[-1px] after:left-3 transition ease-in duration-75"
									>
										Certificates
									</a>
								</li>
								<li>
									<a
										href="#contactMe"
										className="hover:border-4 border-4 border-white relative z-[100] hover:border-black px-3 py-2 bg-white after:content-[''] after:hover:border-4 after:z-[-1] after:border-grey-400 after:px-12 after:w-full after:py-5 after:absolute after:top-[-1px] after:left-3 transition ease-in duration-75"
									>
										Contact Me
									</a>
								</li>
							</ul>
						</nav>
						<div className="hidden xl:block xl:ml-10">
							<a
								href="tel:+63 915 846 3439"
								className="text-xl relative  border-4 border-black py-3 px-5 hover:text-white hover:bg-black transition ease-in duration-75"
							>
								+63 915 846 3439
							</a>
						</div>
						<div className="pl-5 pt-3 flex xl:hidden gap-x-4">
							<span>
								<a href={socialContent.github.url} target="__blank">
									<FontAwesomeIcon icon={socialContent.github.icon} size="2x" />
								</a>
							</span>
							<span>
								<a href={socialContent.linkedin.url} target="__blank">
									<FontAwesomeIcon
										icon={socialContent.linkedin.icon}
										size="2x"
									/>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
