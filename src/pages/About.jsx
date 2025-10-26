import { motion } from "framer-motion";
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
    SiReactrouter,
    SiRedux,
    SiVite,
    SiGit,
    SiTypescript,
    SiPython,
} from "react-icons/si";

const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "React-Router", icon: <SiReactrouter /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Git", icon: <SiGit /> },
];

export default function About({ name }) {
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
                        <div className="w-64 h-64 rounded-full overflow-hidden bg-bg-secondary mypic">
                            <img
                                src="/static/images/20240415_GA66.png"
                                alt="Profile"
                                className="w-full h-full object-cover my-pic"
                                loading="lazy"
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
                            Hi, I&apos;m Kavin, an ICT student at SUSS with an
                            aspiration to become a web developer. I&apos;m a
                            curious and passionate individual who enjoys
                            bringing ideas to life through code. I love
                            exploring new technologies and expanding my
                            knowledge in the vast world of computing.
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
                                        y: -200 + idx * 10,
                                        x: -200 + idx * 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: (idx * 0.1) / 2,
                                        ease: "easeInOut",
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
                </div>
            </motion.div>
        </div>
    );
}
