import { useRef } from "react";
import { motion } from "framer-motion";
import { FaAws, FaDatabase } from "react-icons/fa";
import {
    SiCss3,
    SiFramer,
    SiHtml5,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiReactrouter,
    SiRedux,
    SiVite,
    SiVitest,
    SiGit,
    SiTypescript,
    SiPython,
    SiDocker,
    SiLinux,
    SiFigma,
} from "react-icons/si";

const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "React-Router", icon: <SiReactrouter /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Mongoose", icon: <SiMongoose /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Vitest", icon: <SiVitest /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Git", icon: <SiGit /> },
];

const certificates = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "04/2026",
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle",
        date: "10/2025",
    },
];

const education = [
    {
        degree: "BSc Information & Communication Technology (Part-time)",
        school: "Singapore University of Social Sciences (SUSS)",
        period: "07/2025 – 2028/2029",
    },
    {
        degree: "Certificate in Software Engineering Immersive",
        school: "General Assembly",
        period: "03/2024 – 06/2024",
    },
    {
        degree: "Diploma in Materials Science",
        school: "Republic Polytechnic",
        period: "04/2017 – 03/2020",
    },
];

export default function About({ name }) {
    const picRef = useRef(null);
    const sheenRef = useRef(null);

    const handlePicMove = (e) => {
        const el = picRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        el.style.transition = "transform 0.08s ease-out";
        el.style.transform = `perspective(600px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
        if (sheenRef.current) {
            sheenRef.current.style.opacity = "1";
            sheenRef.current.style.background = `radial-gradient(circle at ${((x + 1) * 50).toFixed(1)}% ${((y + 1) * 50).toFixed(1)}%, rgba(255, 255, 255, 0.28) 0%, transparent 65%)`;
        }
    };

    const handlePicLeave = () => {
        if (picRef.current) {
            picRef.current.style.transition = "transform 0.4s ease-out";
            picRef.current.style.transform =
                "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        }
        if (sheenRef.current) {
            sheenRef.current.style.opacity = "0";
        }
    };

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
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-center items-center md:order-2"
                    >
                        <div
                            ref={picRef}
                            onMouseMove={handlePicMove}
                            onMouseLeave={handlePicLeave}
                            className="relative w-64 h-64 rounded-full overflow-hidden bg-bg-secondary mypic will-change-transform"
                        >
                            <img
                                src="/static/images/20240415_GA66.png"
                                alt="Profile"
                                className="w-full h-full object-cover my-pic"
                                loading="lazy"
                            />
                            <div
                                ref={sheenRef}
                                className="pointer-events-none absolute inset-0 rounded-full opacity-0"
                                style={{ transition: "opacity 0.25s ease-out" }}
                            />
                        </div>
                    </motion.div>

                    {/* About Me Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4 md:order-1"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-primary">
                            {name}
                        </h3>
                        <p className="text-text-primary font-medium text-lg">
                            Hi, I&apos;m Kavin, a part-time BSc ICT
                            undergraduate at SUSS and General Assembly Software
                            Engineering Immersive graduate. I&apos;m an AWS
                            Certified Cloud Practitioner with foundational
                            knowledge in web development, cloud architecture,
                            relational/NoSQL databases, and network security,
                            and I enjoy bringing ideas to life through code.
                        </p>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:col-span-2 space-y-4 md:order-3"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                        <div className="md:flex flex-wrap grid grid-cols-3 gap-4 ">
                            {skills.map((skill, idx) => (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.85,
                                        y: 12,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: idx * 0.03,
                                    }}
                                    className="card md:flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-[0.7rem] mb-4 break-inside-avoid w-auto h-auto"
                                    key={idx}
                                >
                                    {skill.icon}
                                    <p className="text-xs md:text-base">
                                        {skill.name}
                                    </p>
                                </motion.div>
                            ))}
                            {/* {skills.map((skill, index) => (
								<div key={skill.name}>
									<div className="flex justify-between mb-1">
										<span className="font-medium">
											{skill.name}
										</span>
										<span className="text-text-secondary">
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
                    {/* Certificates Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="md:col-span-2 space-y-4 md:order-4"
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            Certificates
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {certificates.map((cert, idx) => (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: idx * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className="card bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 flex flex-col justify-between"
                                >
                                    <p className="font-semibold text-base">
                                        {cert.title}
                                    </p>
                                    <p className="text-sm text-text-secondary mt-1">
                                        {cert.issuer} · {cert.date}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="md:col-span-2 space-y-4 md:order-5 pb-16"
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={edu.degree}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: idx * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className="card bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-1"
                                >
                                    <div>
                                        <p className="font-semibold text-base">
                                            {edu.degree}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            {edu.school}
                                        </p>
                                    </div>
                                    <p className="text-sm text-text-secondary">
                                        {edu.period}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
