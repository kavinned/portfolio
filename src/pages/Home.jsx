import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { useState, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";

export default function Home({ name }) {
	const winHeight = window.innerHeight / 3;
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="min-h-[calc(100vh-6rem)] flex items-center justify-center hero">
			<div className="w-full">
				{/* Hero Section */}
				<motion.div
					initial={{
						opacity: 0,
						y: winHeight / 4,
						scale: "250%",
					}}
					animate={{ opacity: 1, y: 0, scale: "100%" }}
					transition={{
						duration: 1,
						type: "spring",
						stiffness: 100,
						damping: 12,
						ease: "easeInOut",
						bounce: 0.5,
					}}
					className="max-w-2xl mx-auto text-center px-4 transition-none"
				>
					<h2 className="text-5xl font-bold mb-6 flex justify-center flex-col md:block">
						Hi, I&apos;m{" "}
						<span>
							{name.split("").map((char, index) => (
								<motion.span
									key={index}
									initial={{
										opacity: 0,
										...(isMobile
											? {
													x:
														index % 2 === 0
															? -50
															: 50,
													y: 0,
													scale: 1.5,
											  }
											: {
													skewY: 5 + index * 2,
													skewX: -5 - index * 2,
													y: -20 + index * 2,
											  }),
									}}
									animate={{
										opacity: 1,
										...(isMobile
											? { x: 0, y: 0, scale: 1 }
											: {
													skewY: 0,
													skewX: 0,
													y: 0,
											  }),
									}}
									transition={{
										duration: 0.5,
										delay: 0.5 + index * 0.1,
										ease: "easeInOut",
									}}
									className="inline-block text-primary"
								>
									{char === " " ? "\u00A0" : char}
								</motion.span>
							))}
						</span>
						<br className="md:block hidden" />
						<span className="text-sky-500 md:text-5xl text-4xl">
							Web Developer
						</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
						A developer with a passion for creating beautiful and
						functional web experiences.
					</p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.5,
							ease: "linear",
						}}
						className="flex gap-6 justify-center"
					>
						<Link to="/contact" className="btn btn-secondary">
							Get in touch
						</Link>
						<Link
							to="/about"
							className="btn btn-primary scale-[1.15] "
						>
							About Me
						</Link>
						<Link to="/projects" className="btn btn-secondary">
							View my work
						</Link>
					</motion.div>
				</motion.div>
				<SocialLinks className="fixed left-8 bottom-8 hidden md:flex flex-col gap-4" />
				{/* Mobile Social Links */}
				<SocialLinks className="flex md:hidden justify-center gap-6 mt-12" />
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 200 }}
					transition={{
						duration: 0.5,
						ease: "easeInOut",
					}}
					className="fixed right-8 bottom-8 flex items-center gap-2 text-sm"
				>
					<FiMapPin className="text-gray-500 dark:text-gray-400" />
					<span>Singapore</span>
				</motion.div>
			</div>
		</div>
	);
}
