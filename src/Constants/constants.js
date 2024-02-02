import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	awsIcon,
	calculator,
	cssIcon,
	eslintIcon,
	figmaIcon,
	gitIcon,
	githubIcon,
	htmlIcon,
	javaIcon,
	jsIcon,
	neoIcon,
	nodeIcon,
	pawsitivePrototype,
	psqlIcon,
	pyIcon,
	raspIcon,
	reactIcon,
	viteIcon,
	restauran,
	burger,
	furni,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	raspIcon,
	neoIcon,
	figmaIcon,
	avatar,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faDiscord,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hello there, I'm so happy you are here! (:",

		"I'm Alioune, a dedicated and passionate web developer. With a keen eye for detail and a relentless drive for perfection, I specialize in creating visually appealing and user-friendly websites.",

		"My expertise lies in front-end development, where I utilize the latest technologies and frameworks to ensure a seamless user experience.",

		"I am committed to delivering high-quality web solutions that meet the specific needs of my clients, helping their businesses thrive in the digital world. Let's connect and bring your web vision to life!",
	],
};

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const projects = [



	{
		name: "Restauran",
		description:
			'A website for the restaurant "restauran" which presents its dishes, prices, staff and even customer reviews. Possibility of ordering online and several other features...',
		image: restauran,
		source_code_link: "https://github.com/VeeGeR32/restoran",
		demo_link: "https://restoran-web.vercel.app",
	},
	{
		name: "Burger Bachelor",
		description:
			'"Burger Bachelor," an online burger restaurant, displays a variety of gourmet burgers with descriptions, ingredients, and prices. The website the contact to order burgers online, view mouth-watering images, and read customer feedback.',
		image: burger,
		source_code_link: "https://github.com/VeeGeR32/burger",
		demo_link:
			"https://burger-veeger.vercel.app",
	},
	{
		name: "Furni",
		description:
			'An online furniture store, "Furni," showcases a range of stylish and contemporary furniture, including details on materials, sizes, and prices. The site offers an easy browsing experience with the ability to view furniture in various interior settings and read customer reviews.',
		image: furni,
		source_code_link: "https://github.com/VeeGeR32/furni",
		demo_link: "https://furni-swart.vercel.app/",
	},
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
			"I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
	},
	{
		id: "java",
		title: "Java",
		icon: javaIcon,
		description:
			"I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
	},
	{
		id: "aws",
		title: "Amazon Web Services",
		icon: awsIcon,
		description:
			"I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
	},
	{
		id: "figma",
		title: "Figma",
		icon: figmaIcon,
		description:
			"In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
	},
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},
	{
		id: "psql",
		title: "Postgresql",
		icon: psqlIcon,
		description:
			"I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
	},
	{
		id: "vite",
		title: "Vite",
		icon: viteIcon,
		description:
			"I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
	},
	{
		id: "py",
		title: "Python",
		icon: pyIcon,
		description:
			"With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
	},
	{
		id: "neo",
		title: "Neo4j",
		icon: neoIcon,
		description:
			"I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
	},
	{
		id: "raspi",
		title: "Raspberry Pi",
		icon: raspIcon,
		description:
			"I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
	},
	{
		id: "eslint",
		title: "Eslint",
		icon: eslintIcon,
		description:
			"I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
	},
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
