import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
	return (
		<div className="fooldal">
			<h1>2. Világháború</h1>
			<h2>
				Ezen a weboldalon amit a Kókány Corporations csapata készített a második
				Világháborúról tudtok tanulni illetve feladatokat megoldani
			</h2>
			<h2>A csapat tagjai: Mester Máté, Tran Duy Dat, Vadász Zsolt</h2>
			<h2>
				A project elkészítési ideje: 4 nap Szombattól Keddig, Napi 3 óra
				foglalkozás
			</h2>
			<h2>A weboldal elkészítéséhez React Js, CSS, HTML volt szükséges.</h2>
			<h2>Az egész project fent megtalálható a github repónkban</h2>
			<Link to="https://github.com/TranRobi/2vh_kokany" target="_blank">
				Github repo
			</Link>
		</div>
	);
}

export default Home;
