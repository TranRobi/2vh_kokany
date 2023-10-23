import React, { useState } from "react";
import Data from "../../Data/Feladatok.json";

import "./Feladat.css";

function Feladat() {
	const [Jelenlegi, setJelenlegi] = useState(0);

	return (
		<>
			<div className="feladatok">
				<div className="feladat-fejlec">
					<h1>{Data[Jelenlegi].kerdes}</h1>
					<h2>
						Kérdések {Data[Jelenlegi].id} / {Data.length}
					</h2>
				</div>
			</div>
		</>
	);
}

export default Feladat;
