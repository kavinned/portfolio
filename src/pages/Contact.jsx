import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";

const contactInfo = [
	{
		icon: FiMail,
		label: "Email",
		value: "kavin.ned@gmail.com",
		href: "mailto:kavin.ned@gmail.com",
	},
	{
		icon: FiLinkedin,
		label: "LinkedIn",
		value: "https://www.linkedin.com/in/kavin-nedumaran/",
		href: "https://www.linkedin.com/in/kavin-nedumaran/",
	},

	{
		icon: FiMapPin,
		label: "Location",
		value: "Singapore",
	},
];

export default function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container py-20">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="max-w-4xl mx-auto"
			>
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="section-title"
				>
					Get in Touch
				</motion.h2>

				<div className="flex md:items-start items-center gap-10 md:gap-20 justify-center md:flex-row flex-col">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="space-y-6 w-fit"
					>
						<h3 className="text-2xl font-semibold mb-4">
							Contact Information
						</h3>
						{contactInfo.map((item) => (
							<div
								key={item.label}
								className="flex items-center space-x-4"
							>
								<item.icon className="text-2xl text-primary" />
								<div>
									<p className="font-medium">{item.label}</p>
									{item.href ? (
										<a
											href={item.href}
											className="text-gray-600 dark:text-gray-300 hover:text-primary"
										>
											{item.value}
										</a>
									) : (
										<p className="text-gray-600 dark:text-gray-300">
											{item.value}
										</p>
									)}
								</div>
							</div>
						))}
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className="w-[75vw] px-10 md:w-1/2"
					>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent ring-1 ring-gray-300"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent ring-1 ring-gray-300"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent ring-1 ring-gray-300"
									required
								></textarea>
							</div>
							<motion.button
								type="submit"
								className="btn btn-primary w-full"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Send Message
							</motion.button>
						</form>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
