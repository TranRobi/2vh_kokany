import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Compononents/Navbar/Navbar";
import Tananyag from "./Compononents/Tananyagok/Tananyag";
import Tema from "./Compononents/Home/Home";
import Feladat from "./Compononents/Feladatok/Feladat";

function App() {
	return (
		<>
			<div className="fejlec">
				<Navbar />
			</div>
			<div className="container">
				<Routes>
					<Route path="/" element={<Tema />} />
					<Route path="/Tananyag" element={<Tananyag />} />
					<Route path="/Feladatok" element={<Feladat />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
