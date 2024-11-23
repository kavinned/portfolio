import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const name = "Kavin";

export default function App() {
	return (
		<Router>
			<Layout name={name}>
				<Routes>
					<Route path="/" element={<Home name={name} />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About name={name} />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Layout>
		</Router>
	);
}
