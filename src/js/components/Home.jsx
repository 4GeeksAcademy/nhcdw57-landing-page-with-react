import React, { useState,useEffect} from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx"
import { Card } from "./Card.jsx"
import { Footer } from "./Footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [output, setOutput] = useState((window.innerWidth>=991)?"big":"small");
	let cardList = [
		{
			imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg",
			title: "Card Title1",
			cardText: "Blah1",
			buttonURL: "#",
			buttonLabel: "Find out More!1"
		},
		{
			imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg",
			title: "Card Title2",
			cardText: "Blah2",
			buttonURL: "#",
			buttonLabel: "Find out More!2"
		},
		{
			imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg",
			title: "Card Title3",
			cardText: "Blah3",
			buttonURL: "#",
			buttonLabel: "Find out More!3"
		},
		{
			imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg",
			title: "Card Title4",
			cardText: "Blah4",
			buttonURL: "#",
			buttonLabel: "Find out More!4"
		}
	];
	let cardListMapped = cardList.map((firstParameter, index) => (
		<Card
			title={firstParameter.title}
			imgURL={firstParameter.imgURL}
			cardText={firstParameter.cardText}
			buttonURL={firstParameter.buttonURL}
			buttonLabel={firstParameter.buttonLabel}
			key={index}
		/>)
	);

	useEffect(() => {
		function adjustResize() {
			if (window.innerWidth < 991) {
				setOutput("small");
			}else if(window.innerWidth>=991){
				setOutput("big");
			}
		}
		window.addEventListener('resize',adjustResize)
		return () => window.removeEventListener('resize',adjustResize)
	}, [output]);

	let cardOrientX = "d-flex justify-content-between";
	let cardOrientY = "d-flex flex-column justify-content-center align-items-center";

	return (
		<div className="container-fluid p-0 d-flex flex-column min-vh-100">
			<div className="text-center">
				<Navbar output={output}/>
			</div>
			<div className="container flex-grow-1">
				<Jumbotron />
				<div className={(output==="big")?cardOrientX:cardOrientY}>
					{cardListMapped}
				</div>
			</div>
			<Footer />
		</div>
	);
};
