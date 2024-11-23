import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
	{
		href: "https://github.com/kavinned",
		icon: <FiGithub />,
		label: "Github",
		delay: 0,
	},
	{
		href: "https://www.linkedin.com/in/kavin-nedumaran/",
		icon: <FiLinkedin />,
		label: "LinkedIn",
		delay: 0.15,
	},
	{
		href: "mailto:kavin.ned@gmail.com",
		icon: <FiMail />,
		label: "Email",
		delay: 0.3,
	},
];

export default function SocialLinks({ className = "" }) {
	return (
		<div className={className}>
			{links.map((link) => (
				<motion.a
					key={link.label}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ scale: 1.1 }}
					animate={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 20 }}
					transition={{
						duration: 0.5,
						delay: link.delay,
						ease: "easeInOut",
					}}
					className="text-2xl hover:text-primary transition-colors flex items-center gap-2"
				>
					{link.icon}
					<span className="text-base">{link.label}</span>
				</motion.a>
			))}
		</div>
	);
}
