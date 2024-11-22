import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiBriefcase } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { FiUsers, FiMail } from "react-icons/fi";

export default function Layout({ children, name }) {
	const [isOpen, setIsOpen] = useState(false);

	const userTheme = localStorage.getItem("theme");
	const systemTheme = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const [isDark, setIsDark] = useState(
		userTheme === "dark" || (!userTheme && systemTheme)
	);
	const menuRef = useRef(null);

	const updateTheme = (dark) => {
		if (dark) {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
		}
		localStorage.setItem("theme", dark ? "dark" : "light");
	};

	useEffect(() => {
		updateTheme(isDark);
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark(!isDark);
		updateTheme(!isDark);
	};

	useEffect(() => {
		const closeMenu = () => {
			if (isOpen && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", closeMenu);
		return () => {
			document.removeEventListener("click", closeMenu);
		};
	}, [isOpen]);

	const location = useLocation();

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="min-h-screen flex flex-col">
			<header className="fixed top-0 w-full bg-bg-primary border-b border-border-color backdrop-blur-sm z-50">
				<nav className="container py-4">
					<div className="flex items-center justify-between">
						{/* Website Name */}
						<Link
							to="/"
							className="text-2xl font-bold hover:text-primary"
						>
							{name}
						</Link>
						<div className="flex items-center ">
							{/* Navigation Links */}
							<div
								ref={menuRef}
								className={`${
									isOpen ? "open" : "closed"
								} md:static md:border-none flex flex-col items-start absolute top-full left-0 w-full md:bg-transparent md:dark:bg-transparent bg-gray-200 dark:bg-[#141a23] border-t border-b border-border-color md:items-center justify-center md:space-x-6 md:flex-row md:shadow-none shadow-lg dark:shadow-slate-800 shadow-gray-400`}
							>
								<Link
									to="/about"
									onClick={() => setIsOpen(false)}
									className={`nav-link ${
										location.pathname === "/about"
											? "text-primary"
											: ""
									} w-full md:w-auto p-4 flex items-center gap-2`}
								>
									<FiUsers className="md:hidden" /> About
								</Link>
								<Link
									to="/projects"
									onClick={() => setIsOpen(false)}
									className={`nav-link ${
										location.pathname === "/projects"
											? "text-primary"
											: ""
									} w-full md:w-auto p-4 flex items-center gap-2`}
								>
									<FiBriefcase className="md:hidden" />{" "}
									Projects
								</Link>
								<Link
									to="/contact"
									onClick={() => setIsOpen(false)}
									className={`nav-link ${
										location.pathname === "/contact"
											? "text-primary"
											: ""
									} w-full md:w-auto p-4 flex items-center gap-2`}
								>
									<FiMail className="md:hidden" /> Contact
								</Link>
							</div>

							{/* Theme Toggle Button */}
							<abbr
								title="Toggle Theme"
								className="p-0 m-0 flex justify-center items-center"
							>
								<button
									onClick={toggleTheme}
									className="text-2xl hover:text-primary"
									id="theme-toggle"
									aria-label={
										isDark
											? "Switch to light mode"
											: "Switch to dark mode"
									}
								>
									{isDark ? <FiSun /> : <FiMoon />}
								</button>
							</abbr>
							<button
								onClick={(e) => {
									e.stopPropagation();
									setIsOpen(!isOpen);
								}}
								className="md:hidden bg-transparent hover:border-none border-none px-0"
							>
								<CiMenuKebab className="text-2xl" />
							</button>
						</div>
					</div>
				</nav>
			</header>

			<main
				className={`${
					isOpen
						? "blur-md md:blur-none -backdrop-hue-rotate-30 md:hue-rotate-0"
						: ""
				} flex-grow pt-20`}
			>
				{children}
			</main>
			<svg
				className="fixed pointer-events-none dark:opacity-[0.3] opacity-[0.5] transition-all duration-100 ease-out rounded-full blur-2xl -z-50 size-36 animate-pulse"
				style={{
					transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
				}}
			>
				<circle cx="72" cy="72" r="72" className="fill-primary" />
			</svg>
		</div>
	);
}
