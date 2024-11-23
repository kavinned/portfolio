import { useEffect, useState } from "react";

function CustomCursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isClick, setIsClick] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useEffect(() => {
		const handleClick = () => {
			setIsClick(true);
			setTimeout(() => {
				setIsClick(false);
			}, 300);
		};
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return (
		<>
			<svg
				className="md:block hidden fixed pointer-events-none dark:opacity-[0.3] opacity-[0.5] transition-all duration-100 ease-out rounded-full blur-2xl -z-50 size-36 animate-pulse"
				style={{
					transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
				}}
			>
				<circle
					cx="72"
					cy="72"
					r="72"
					className={`fill-primary ${
						isClick
							? "fill-red-500 blur-3xl opacity-50"
							: "fill-primary blur-none opacity-100"
					}`}
				/>
			</svg>
		</>
	);
}

export default CustomCursor;
