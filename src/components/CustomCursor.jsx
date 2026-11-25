import { useEffect, useRef, useState } from "react";

function CustomCursor() {
	const cursorRef = useRef(null);
	const [isClick, setIsClick] = useState(false);

	useEffect(() => {
		let rafId = null;
		let x = -9999;
		let y = -9999;

		const update = () => {
			if (cursorRef.current) {
				cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
			}
			rafId = null;
		};

		const handleMouseMove = (e) => {
			x = e.clientX;
			y = e.clientY;
			if (rafId === null) {
				rafId = requestAnimationFrame(update);
			}
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			if (rafId !== null) cancelAnimationFrame(rafId);
		};
	}, []);

	useEffect(() => {
		let timeoutId;
		const handleClick = () => {
			setIsClick(true);
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => setIsClick(false), 300);
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<div
			ref={cursorRef}
			className="md:block hidden fixed top-0 left-0 pointer-events-none dark:opacity-[0.3] opacity-[0.5] rounded-full -z-50 size-72 will-change-transform animate-pulse"
			style={{
				transition: "none",
				transform: "translate3d(-9999px, -9999px, 0) translate(-50%, -50%)",
				background: isClick
					? "radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, transparent 70%)"
					: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
			}}
		/>
	);
}

export default CustomCursor;
