import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="trafficLight align-middle">
			<div
				onClick={() => setColor("redOn")}
				className={
					"red light" + (color === "redOn" ? " redOn" : "")
				}></div>

			<div
				onClick={() => setColor("yellowOn")}
				className={
					"yellow light" + (color === "yellowOn" ? " yellowOn" : "")
				}></div>
			<div
				onClick={() => setColor("greenOn")}
				className={
					"green light" + (color === "greenOn" ? " greenOn" : "")
				}></div>
		</div>
	);
};

export default Home;
