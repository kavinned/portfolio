import { motion } from "framer-motion";

export default function Toast({ message, type }) {
	return (
		<motion.div
			initial={{ x: "100%", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: "100%", opacity: 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
				type === "success"
					? "bg-[#3fb950] text-white"
					: "bg-red-500 text-white"
			}`}
		>
			{message}
		</motion.div>
	);
}
