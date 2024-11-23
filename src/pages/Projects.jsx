import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { useEffect, useRef } from "react";

const projects = [
	{
		title: "WealthWatch",
		description:
			"An app that allows users to track their monthly budgets and additionally track stocks too.",
		tech: ["Next.js", "Next-Auth", "MongoDB", "Tailwind CSS", "Chart.js"],
		image: "/static/images/wealthwatch.png",
		link: "https://p4-wealthwatch.vercel.app/",
		github: "https://github.com/kavinned/wealthwatch",
	},
	{
		title: "EventBunny",
		description:
			"An event and task management app that users to plan events collaboratively. (This project was a collaborative effort with a team of 2 other people)",
		tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
		image: "/static/images/eventbunny.png",
		link: "https://eventbunny.onrender.com/",
		github: "https://github.com/kavinned/eventbunny",
	},
	{
		title: "PokéDB",
		description:
			"A Pokémon database app that allows users to search and view information about different Pokémon.",
		tech: ["React.js", "CSS3", "Airtable"],
		image: "/static/images/pokedb.png",
		link: "https://p2-poke-db.vercel.app/",
		github: "https://github.com/kavinned/pokedb",
	},
	{
		title: "Flappy Bird Clone",
		description:
			"A clone of the classic game Flappy Bird using React.js and Framer Motion.",
		tech: ["HTML5", "CSS3", "JavaScript"],
		image: "/static/images/flappybird.png",
		link: "https://p1-flappy-bird.vercel.app/",
		github: "https://github.com/kavinned/flappy-bird-clone",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

function ProjectCard({ project }) {
	const cardRef = useRef(null);

	useEffect(() => {
		const card = cardRef.current;
		if (!card) return;

		const handleMouseMove = (e) => {
			const rect = card.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 100;
			const y = ((e.clientY - rect.top) / rect.height) * 100;
			card.style.setProperty("--x", `${x}%`);
			card.style.setProperty("--y", `${y}%`);
		};

		card.addEventListener("mousemove", handleMouseMove);
		return () => card.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<motion.div
			ref={cardRef}
			variants={item}
			className="spotlight card bg-[var(--bg-secondary)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
		>
			<img
				src={project.image}
				alt={project.title}
				className="object-cover"
				width={600}
				height={400}
			/>
			<div className="p-6 flex flex-col flex-grow">
				<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
					{project.description}
				</p>
				<div className="mt-auto">
					<div className="flex flex-wrap gap-2 mb-4">
						{project.tech.map((tech, i) => (
							<span
								key={i}
								className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
							>
								{tech}
							</span>
						))}
					</div>
					<div className="flex gap-4 items-center">
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary flex-1 text-center"
						>
							View Project
						</a>
						<a
							href={project.github}
							className="text-2xl hover:text-primary transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiGithub />
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default function Projects() {
	return (
		<div className="container py-20">
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-4xl font-bold mb-12 text-center"
			>
				My Projects
			</motion.h2>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
			>
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</motion.div>
		</div>
	);
}
