// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import schoolLogo from './assets/education_logo/school.png';
import clgLogo from './assets/education_logo/integral.png';

// Project Section Logo's
import landing from './assets/work_logo/landing_page.png';
import game from './assets/work_logo/Tic Tac toe.png';
import background_removal from './assets/work_logo/removal.png';
import port from './assets/work_logo/myport.png';

export const SkillsInfo = [
	{
		title: 'Frontend',
		skills: [
			{ name: 'HTML', logo: htmlLogo },
			{ name: 'CSS', logo: cssLogo },
			{ name: 'SASS', logo: sassLogo },
			{ name: 'JavaScript', logo: javascriptLogo },
			{ name: 'React JS', logo: reactjsLogo },
			{ name: 'Next JS', logo: nextjsLogo },
			{ name: 'Tailwind CSS', logo: tailwindcssLogo },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Node JS', logo: nodejsLogo },
			{ name: 'Express JS', logo: expressjsLogo },
			{ name: 'MySQL', logo: mysqlLogo },
			{ name: 'MongoDB', logo: mongodbLogo },
			{ name: 'PostgreSQL', logo: postgreLogo },
		],
	},
	{
		title: 'Languages',
		skills: [
			{ name: 'C', logo: cLogo },
			{ name: 'C++', logo: cppLogo },
			{ name: 'Python', logo: pythonLogo },
			{ name: 'JavaScript', logo: javascriptLogo },
			{ name: 'TypeScript', logo: typescriptLogo },
		],
	},
	{
		title: 'Tools',
		skills: [
			{ name: 'Git', logo: gitLogo },
			{ name: 'GitHub', logo: githubLogo },
			{ name: 'VS Code', logo: vscodeLogo },
			{ name: 'Postman', logo: postmanLogo },
			{ name: 'Compass', logo: mcLogo },
			{ name: 'Vercel', logo: vercelLogo },
			{ name: 'Netlify', logo: netlifyLogo },
			{ name: 'Figma', logo: figmaLogo },
		],
	},
];

export const education = [
	{
		id: 0,
		img: schoolLogo,
		school: "ST. Teresa's Day School, Lucknow",
		date: 'June 2019 - July 2023',
		grade: '84.5%',
		desc: "I have completed my class 12 from ST. Teresa's Day School, Lucknow.",
		degree: 'High School',
	},
	{
		id: 1,
		img: clgLogo,
		school: 'Integral University, Lucknow',
		date: 'Aug 2023 - July 2027',
		grade: '8.5 CGPA',
		desc: "I am currently pursuing my Bachelor's degree in Computer Science from Integral University, Lucknow. My coursework includes a mix of theoretical foundations and practical applications, preparing me for a career in software development.",
		degree: 'Bachelor of Technology in Computer Science',
	},
];

export const projects = [
	{
		id: 0,
		title: 'Tic Tac Toe Game',
		description:
			'A fun and interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. Players can enjoy a classic game experience with a modern twist, featuring a sleek design and smooth gameplay.',
		image: game,
		tags: ['HTML', 'CSS', 'JavaScript'],
		github: 'https://github.com/student-integralcollege/Tic-Tac-Toe',
		webapp: 'https://tikitakafree.netlify.app/',
	},
	{
		id: 1,
		title: 'Landing Page',
		description:
			'A responsive headphone landing page built with React and Tailwind CSS.',
		image: landing,
		tags: ['React JS', 'Tailwind CSS'],
		github: 'https://github.com/student-integralcollege/landing-page',
		webapp: 'https://headphone12-website.netlify.app',
	},
	{
		id: 2,
		title: 'BG Removal',
		description:
			'A React-based web application that provides background removal services for images. Users can upload their images and get a clean, transparent background in seconds. The app uses advanced AI algorithms to ensure high-quality results.',
		image: background_removal,
		tags: [
			'React JS',
			'Tailwind CSS',
			'Clerk.js',
			'Node JS',
			'Express JS',
			'MongoDB',
		],
		github: 'https://github.com/student-integralcollege/bg-removal',
		webapp: '',
	},
	{
		id: 3,
		title: 'Portfolio',
		description: 'A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS, it features a modern design and responsive layout, making it easy to navigate on any device.',
		image: port,
		tags: ['React JS', 'Tailwind CSS'],
		github: 'https://github.com/codingmastr/cmtk-email-validator',
		webapp: 'https://www.npmjs.com/package/cmtk-email-validator',
	},
];