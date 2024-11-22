import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { useEffect, useRef } from "react";

const projects = [
	{
		title: "E-commerce Platform",
		description:
			"A modern e-commerce platform built with Next.js and Stripe integration",
		tech: ["Next.js", "React", "Stripe", "Tailwind CSS"],
		image: "https://via.placeholder.com/600x400",
		link: "https://github.com",
		github: "/github/ecommerce-platform",
	},
	{
		title: "Task Management App",
		description:
			"A collaborative task management tool with real-time updates",
		tech: ["React", "Firebase", "Material-UI", "Redux"],
		image: "https://via.placeholder.com/600x400",
		link: "https://github.com",
		github: "/github/task-manager",
	},
	{
		title: "AI Image Generator",
		description: "An AI-powered image generation tool using DALL-E API",
		tech: ["Vue.js", "OpenAI API", "Node.js", "Express"],
		image: "https://via.placeholder.com/600x400",
		link: "https://github.com",
		github: "/github/ai-image-gen",
	},
	{
		title: "Social Media Dashboard",
		description:
			"A comprehensive analytics dashboard for social media management",
		tech: ["React", "D3.js", "Node.js", "MongoDB"],
		image: "https://via.placeholder.com/600x400",
		link: "https://github.com",
		github: "/github/social-dashboard",
	},
	{
		title: "Weather App",
		description:
			"A beautiful weather application with animated visualizations",
		tech: ["React", "OpenWeather API", "Framer Motion"],
		image: "https://via.placeholder.com/600x400",
		link: "https://github.com",
		github: "/github/weather-app",
	},
	{
		title: "Portfolio Website",
		description:
			"A modern portfolio website built with React and Framer Motion",
		tech: ["React", "Tailwind CSS", "Framer Motion"],
		image: "https://via.placeholder.com/600x400",
		link: "https://github.com",
		github: "/github/portfolio",
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
			className="spotlight card bg-[var(--bg-secondary)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
		>
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
					{project.description}
				</p>
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
					<Link
						to={project.github}
						className="text-2xl hover:text-primary transition-colors"
					>
						<FiGithub />
					</Link>
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
