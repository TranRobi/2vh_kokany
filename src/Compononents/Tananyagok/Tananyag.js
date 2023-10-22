import React from "react";
import "./Tananyag.css";

import { useState } from "react";
import Data from "../../Data/Tananyag.json";

function Tananyag() {
	const [kivalsz, setKivalszt] = useState(null);
	const [orKI, setorKI] = useState(null);

	const toggle = (i) => {
		if (kivalsz === i) {
			return setKivalszt(null);
		}

		setKivalszt(i);
	};

	const toggleOr = (i) => {
		if (orKI === i) {
			return setorKI(null);
		}

		setorKI(i);
	};

	return (
		<div>
			{Data.map((data, i) => {
				return (
					<div className="Tananyag">
						<div className="kartyaCim" onClick={() => toggle(i)}>
							<h1>{data.name}</h1>
							<h1>{kivalsz === i ? "-" : "+"}</h1>
						</div>
						<div className={kivalsz === i ? "elrejt.mutat" : "elrejt"}>
							<p>{data.content}</p>
							{data.countries &&
								data.countries.map((country, i) => {
									return (
										<div className="orszag">
											<div className="orszagTitle" onClick={() => toggleOr(i)}>
												<h3>{country.cname}</h3>
												<h3>{orKI === i ? "-" : "+"}</h3>
											</div>
											<div
												className={orKI === i ? "orElrejt.mutat" : "orElrejt"}
											>
												<p>{country.information}</p>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Tananyag;
