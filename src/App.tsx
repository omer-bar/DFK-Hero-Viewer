import "./App.css";
import SearchHero from "./components/showHero/SearchHero";
import ShowHero from "./components/showHero/showHero";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route index element={<SearchHero />} />
			<Route path="/search" element={<ShowHero />} />
			<Route path="*" element={<NoMatch />} />
		</Routes>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}

export default App;
