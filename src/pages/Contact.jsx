import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import Toast from "../components/Toast";
import Loader from "../components/Loader";

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
	const [loading, setLoading] = useState(false);
	const [formStatus, setFormStatus] = useState("");
	const [showToast, setShowToast] = useState(false);

	const form = useRef();

	useEffect(() => {
		if (formStatus) {
			setShowToast(true);
			const timer = setTimeout(() => {
				setShowToast(false);
				setFormStatus("");
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [formStatus]);

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setFormStatus({
						type: "success",
						message: "Message sent successfully!",
					});
					form.current.reset();
				},
				(error) => {
					setFormStatus({
						type: "error",
						message: "Failed to send message",
					});
					console.log("Failed", error.text);
				}
			)
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="container py-20">
			<AnimatePresence>
				{showToast && formStatus && (
					<Toast
						message={formStatus.message}
						type={formStatus.type}
					/>
				)}
			</AnimatePresence>
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
						<form
							ref={form}
							onSubmit={handleSubmit}
							className="space-y-4"
						>
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
									name="from_name"
									className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent ring-1 ring-gray-300"
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
									name="from_email"
									className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent ring-1 ring-gray-300"
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
									className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent ring-1 ring-gray-300"
									required
								></textarea>
							</div>
							<motion.button
								type="submit"
								className="btn btn-primary w-full flex items-center justify-center gap-2"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								disabled={loading}
							>
								{loading ? (
									<>
										<Loader /> Sending...
									</>
								) : (
									"Send Message"
								)}
							</motion.button>
						</form>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
