import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const skills = [
	{ name: "React", icon: "reactjs" },
	{ name: "JavaScript", icon: "js" },
	{ name: "Node.js", icon: "nodejs" },
	{ name: "TypeScript", icon: "typescript" },
	{ name: "CSS", icon: "css3" },
	{ name: "SQL", icon: "mysql" },
];

export default function About() {
	return (
		<div className="container pt-20">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="max-w-7xl mx-auto"
			>
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="section-title font-montserrat"
				>
					About Me
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Profile Image - First on mobile */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className="flex justify-center items-center md:order-2"
					>
						<div className="w-64 h-64 rounded-full overflow-hidden bg-bg-secondary">
							<img
								src="https://via.placeholder.com/400x400"
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>

					{/* About Me Section */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="space-y-4 md:order-1"
					>
						<h3 className="text-2xl font-semibold mb-4 font-montserrat">
							Your Name
						</h3>
						<p className="text-text-secondary font-montserrat">
							I&apos;m a passionate full-stack developer with a
							love for creating beautiful and functional web
							applications. With years of experience in modern web
							technologies, I strive to build solutions that make
							a difference.
						</p>
						<p className="text-text-secondary font-montserrat">
							When I&apos;m not coding, you can find me exploring
							new technologies, contributing to open-source
							projects, or sharing my knowledge through technical
							writing.
						</p>
					</motion.div>

					{/* Skills Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="md:col-span-2 space-y-4 md:order-3"
					>
						<h3 className="text-2xl font-semibold mb-4 font-montserrat">
							Skills
						</h3>
						<div className="md:flex flex-wrap grid grid-cols-3 gap-4">
							{skills.map((skill, idx) => (
								<motion.div
									initial={{
										opacity: 0,
										y: -200 + idx * 10,
										x: -200 + idx * 10,
									}}
									animate={{
										opacity: 1,
										y: 0,
										x: 0,
									}}
									transition={{
										duration: 0.3,
										delay: (idx * 0.1) / 2,
										ease: "easeInOut",
									}}
									className="card md:flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-[0.7rem] mb-4 break-inside-avoid w-auto h-auto"
									key={idx}
								>
									<StackIcon
										className="w-6 h-6"
										name={skill.icon}
									/>
									<p>{skill.name}</p>
								</motion.div>
							))}
							{/* {skills.map((skill, index) => (
								<div key={skill.name}>
									<div className="flex justify-between mb-1">
										<span className="font-medium font-montserrat">
											{skill.name}
										</span>
										<span className="text-text-secondary font-montserrat">
											{skill.level}%
										</span>
									</div>
									<div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
										<motion.div
											initial={{ width: 0 }}
											animate={{
												width: `${skill.level}%`,
											}}
											transition={{
												duration: 1,
												delay: index * 0.1,
											}}
											className="h-full bg-primary"
										/>
									</div>
								</div>
							))} */}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
