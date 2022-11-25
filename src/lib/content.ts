import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

const content = {};

const socialMediaLinks = {
	github: { url: 'https://github.com/jun-edris', Icon: FiGithub },
	linkedin: {
		url: 'https://www.linkedin.com/in/junaire-edris-buico-33b93a205/',
		Icon: CiLinkedin,
	},
	gmail: 'juned.buico@gmail.com',
	display: true, // Set true to display this section, defaults to false
};

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: 'Bohol Island State University',
			logo: '',
			subHeader: 'Bachelor of Science in Information Technology',
			duration: 'June 2018 - July 2022',
			// desc: '',
			// descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
		},
		// {
		// 	schoolName: 'Stanford University',
		// 	logo: require('./assets/images/stanfordLogo.png'),
		// 	subHeader: 'Bachelor of Science in Computer Science',
		// 	duration: 'September 2013 - April 2017',
		// 	desc:
		// 		'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
		// 	descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
		// },
	],
};

const workExperience = {
	experience: [
		{
			role: 'Web Designer',
			company: 'Personiv',
			companylogo: '',
			date: 'June 2022 – Present',
			desc: "Creating business level designs that suits with the client's needs",
			descBullets: [
				'Creating websites using DUDA Website Builder.',
				'To complete as many websites as possible.',
				"Quality assured designs based on company's guidelines",
			],
		},
		{
			role: 'Web Developer Intern',
			company: 'Bohol Island State University - Balilihan Campus',
			companylogo: '',
			date: 'Jan 2022 – July 2022',
			desc: 'Developed the MIS Helpline, the goal is to create a tech support within the institution.',
			descBullets: ['Created the website using MERN stack.'],
		},
	],
};

const contents = {
	content,
	socialMediaLinks,
	educationInfo,
	workExperience,
};

export default contents;
