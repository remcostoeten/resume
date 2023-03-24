export const intro = {
	name: 'Remco Stoeten',
	role: 'Front-end Developer',
	mobile: '+31 6 36 59 07 07',
	email: 'remcostoeten@hotmail.com',
	location: 'the Netherlands',
	experience: [{ type: 'Frontend experience', years: '6 years' }],
	social: [
		['linkedin', 'https://www.linkedin.com/in/remco-stoeten/'],
		['github', 'https://github.com/remcostoeten/'],
	],
	photo: 'https://media.licdn.com/dms/image/C5603AQFIlU2oV2JEgg/profile-displayphoto-shrink_400_400/0/1638502874210?e=1684368000&v=beta&t=jZhXQa7ZFRrkrje35IydaK8mzrb7RMXk69konSRBFUc',
	about: {
		title: 'About me',
		description: `I'm Remco Stoeten, a 26-year-old graphic design graduate turned frontend developer with 6 years of experience. I spent 5 years at Tickles Digital Agency specializing in creating custom e-commerce solutions. Currently, I work in-house at a multinational which provides inhouse and SaaS solutions, where i'm currently responsible for the entire frontend of the corporate shop. While my primary experience is with vanilla and jQuery, I'm working hard to expand my skill set to include modern stack frameworks, such React supersetted with Next.js and TypeScript, which can be seen on my 
    Github. I'm experienced working autonomously and in Scrum settings, always eager to learn and push myself to deliver the best possible results.`,
	},
	objective: {
		title: 'Career Objective',
		description:
			"I have a big passion for CSS and enjoy creating visually appealing UIs. In fact, I hate seeing poor designed applications. Currently, I am spending a lot of time expanding my skills in modern stack frameworks. While working at an agency and on a SaaS product, I have primarily worked with vanilla JavaScript, jQuery, and KnockoutJS, with only minor experience in React. I learned replicating designs with very strict design colleagues. To improve my skills, I am building a playground site in Next.js, TypeScript, and SCSS, which has features such as WhatsApp text export, API calls, search, task/kanban board and authentication (WiP).I want to expand my knowledge in this area and focus on frameworks like React, Next, Vue, or Svelte instead of building dozens of Magento 2 and static sites, althrough I wouldn't mind building advanced UI's since I love CSS.",
	},
};

export const skills = {
	// technical: {
	//   title: "Technical Expertise - Skillbar for relative referencem not absolute messurements. Since rating yourself a 5/5 in our workfield is not possible, always somewhere to progress. In my case a five is where I am confident that I can translate the case to a working project on my own. ",
	//   items: [
	//     { name: "HTML5", Rating: 5 },
	//     { name: "(S)CSS", rating: 5 },
	//     { name: "Javascript & libraries/frameworks", rating: 3 },
	//   ],
	// },
	exposure: {
		title: 'Skills / Expsoure',
		technical: 'technical',
		items: [
			'HTML 5',
			'CSS',
			'SCSS/LESS',
			'Javascript',
			'React/NextJS and legacy libraries like jQuery',
			'E-commerce CMS systems such as Magento2',
		],
	},
	methodology: {	
		title: 'Methodology / Approach',
		items: [
			'Component based architecture',
			'Agile methodology if requested',
			'Autonomy when possible',
			'Learning from seniors, giving to juniors.',
		],
	},
	tools: {
		title: 'Tools',
		items: [
			'Git',
			'VS Code/JetBrains',
			'Jira/Azure',
			'NPM/Composer/Yarn/Gulp',
			'Adobe suite/Figma design tools',
			'Gitlab/Github/Bitbucket',
			'Terminal environment/VIM',
			'Familair with deployments (manual SSH or CI/CD)',
		],
	},
};

export const experience = {
	title: 'Experience',
	companies: [
		{
			name: 'Tickles digital Agency',
			role: 'Front-end developer',
			years: '2017 - 2021',
			expYears: '5 years',
			description: [
				'I started as an intern and stayed on as a full-time employee at a company where we built <Link>custom</link> Magento 2 shops for clients of all sizes and industries. We worked in a Scrum-style team with a designer and back-end developer, where my task was to replicate designs to working shops with (p)HTML, SCSS, jQuery, KnockoutJS, and PHP when needed. Some of the recent shops that I helped deliver include https://www.qhp.nl/?_, https://www.vedder-vedder.com/, https://webshop.alcomex.nl/, and many more.',
			],
		},
		{
			name: 'Distil / Lasaulec',
			role: 'Software Developer',
			years: '2022 - Present',
			description: [
				"In-house multinational company which provides multiple SaaS solutions. I started off by helping to set up a React project, which was my first experience with React. Later on, I insisted on rebuilding the entire front-end of the main shop due to the legacy CSS and lack of semantic HTML. I scraped every line and rebuilt feature by feature in tight collaboration with the designer and back-end, which was C#/.NET. The front-end consisted of my own (open source) SCSS boilerplate, vanilla JS, and KnockoutJS. Still WiP and inhouse code but i'd love to share some snapshots",
			],
		},
	],
};

export const achievements = {
	keyProjects: {
		title: 'Key Projects / Involvements',
		items: [
			'Prevented millions of dollars in state sales tax undercharges by initiating tests that revealed a bug in a new release of shopping cart software.',
			'Isolated previously undiscovered flaw in price checking tool resulting in more competitive pricing and a 20 percent increase in revenue.',
			'Implemented automated testing tools spawning more diligent levels of regression testing, negative testing, error/bug retests and usability.',
			'Prevented millions of dollars in state sales tax undercharges by initiating tests that revealed a bug in a new release of shopping cart software.',
		],
	},
	certificates: {
		title: 'Certificates and Awards',
		items: [
			'<strong>React</strong> and redux - A complete guide 2020 from Udemy',
			'Agile and Scrum Master Certificate from Udacity',
			'Best performer award for consistently exceeding the performance',
			'Certificate of exceptional bug finder by XYZ client',
			'Recorgnition zero defect delivery',
			'Best performer award for consistently exceeding the performance',
		],
	},
};

export const education = {
	title: 'Education',
	items: [
		{
			institution: 'ROC Friese poort Sneek',
			years: '2013 - 2017',
			specialization: 'Graphic design',
			note: 'After finishing my degree here I wanted to pursuit with a higher degree through university, but during my internship at Tickles they offered me a job which in my eyes would yield me far more knowledge than continueing learning at school',
		},
	],
};
