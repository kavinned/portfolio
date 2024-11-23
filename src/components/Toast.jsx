import { motion } from "framer-motion";

export default function Toast({ message, type }) {
	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ duration: 0.5 }}
			className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
				type === "success"
					? "bg-green-500 text-white"
					: "bg-red-500 text-white"
			}`}
		>
			{message}
		</motion.div>
	);
}
