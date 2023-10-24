import React, { useState } from "react";
import Data from "../../Data/Feladatok.json";

import "./Feladat.css";
import { Link } from "react-router-dom";

function Feladat() {
	const [Jelenlegi, setJelenlegi] = useState(0);
	const [Pontok, setPontok] = useState(0);

	const handleKov = (boolean) => {
		const koviKerdes = Jelenlegi + 1;

		if (boolean === true) {
			setPontok(Pontok + 1);
		}

		if (koviKerdes < Data.length) {
			setJelenlegi(koviKerdes);
			return;
		} else {
			alert("Vége a quiznek");
		}
	};

	return (
		<>
			<div className="feladatok">
				<div className="feladat-fejlec">
					<h1>{Data[Jelenlegi].kerdes}</h1>
					<h2>
						Kérdések {Data[Jelenlegi].id} / {Data.length}
					</h2>
					<h2>
						Pontjaid: {Pontok} / {Data.length}
					</h2>
				</div>
				<div className="valaszok">
					{Data[Jelenlegi].valaszok.map((valasz) => {
						return (
							<div>
								<button
									className="valasz"
									onClick={() => handleKov(valasz.helyesE)}
								>
									{valasz.valasz}
								</button>
							</div>
						);
					})}
				</div>
				<div>
					<Link to="/">Vissza a kezdőlapra</Link>
				</div>
			</div>
		</>
	);
}

export default Feladat;
