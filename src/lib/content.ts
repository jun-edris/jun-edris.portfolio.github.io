import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
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

const content = {
	mkv: {
		wantToBe: 'Web Developer',
		headerText: 'Need help to connect to tech?',
		introduction:`I'm a Fullstack Web Developer residing in Philppines specializing in
        building MERN stack web apps. Currently, I'm working as a Web Designer
        to gain experience in Frontend.`,
	},
	logo: '/Logo.svg',
	info: {
		introduction: ``,
		name: 'Junaire Edris',
		skills: [{ Icon: AiOutlineHtml5},{ Icon: DiCss3Full},{ Icon: SiJavascript},{ Icon: SiTypescript},{ Icon: SiPhp},{ Icon: FaReact},{ Icon: FaNodeJs},{ Icon: SiMongodb},{ Icon: SiExpress},{ Icon: SiMaterialui},{ Icon: SiTailwindcss},{ Icon: SiBootstrap},{ Icon: SiPusher}],
		profession: 'Web Designer',
		resume: 'Junaire Edris Buico_CV.pdf'
	},
	socialMediaLinks: {
		github: { url: 'https://github.com/jun-edris', Icon: FiGithub },
		linkedin: {
			url: 'https://www.linkedin.com/in/junaire-edris-buico-33b93a205/',
			Icon: CiLinkedin,
		},
		gmail: 'juned.buico@gmail.com',
		display: true, // Set true to display this section, defaults to false
	}, educationInfo: {
		display: true, // Set false to hide this section, defaults to true
		schools: [
			{
				schoolName: 'Bohol Island State University - Balilihan Campus',
				logo: '/BISU-LOGO.png',
				course: 'Bachelor of Science in Information Technology',
				yearsStudied: 'June 2018 - July 2022',
				achievements: ['Special Recognition in Campus Website Development', 'Proficient Student Awardee in Web Development']
			},
		],
	}, workExperience: {
		experiences: [
			{
				role: 'Web Designer',
				company: 'Personiv',
				companylogo: '',
				years: 'June 2022 – Present',
				desc: "Creating business level designs that suits with the client's needs",
				descBullets: [
					'Creating websites using DUDA Website Builder.',
					'To complete as many websites as possible.',
					"Quality assured designs based on company's guidelines",
				],
				achievements: [
					'Certificate of Completion (Web Design Training)',
				]
			},
			{
				role: 'Web Developer Intern',
				company: 'Bohol Island State University - Balilihan Campus',
				companylogo: '',
				date: 'Jan 2022 – July 2022',
				desc: 'Developed the MIS Helpline, the goal is to create a tech support within the institution.',
				descBullets: ['Created a technical support web app using MERN stack', 'Worked with project manager and discussing all the development process.', ],
				achievements: [
					'Special Recognition in Campus Website Development', 'Proficient Student Awardee in Web Development'
				]
			},
		],
	}, projects: [
		{
			name: 'MIS Helpline',
			desc: 'A technical support web app that provides online assistance to the staff or users inside the institution who are experiencing technical problems with their devices, software, data, or otherconcerns.',
			link: 'https://mis-helpline.onrender.com/',
			img: 'project1.png',
			techUsed: [
				'ReactJs',
				'MongoDB',
				'MaterialUI',
				'Express',
				'Render',
				'PusherJs',
				'JWT Authentication'
			],
		},
		{
			name: 'Cebu Province Weather App',
			desc: 'A side project web app where I practiced the OpenWeatherMap API. This web app provides information about the weather in Cebu, Philippines. Overall, a weather web app for Cebu can be a useful tool for anyone living in or visiting the city. It helps users stay informed about the weather and make plans accordingly, whether they are going to work, school, or on vacation.',
			link: 'https://weather-app-jun-edris.vercel.app/',
			img: 'project2.png',
			techUsed: [
				'ReactJs',
				'TailwindCSS',
				'Vercel',
			],
		}
	]
};

export default content;
