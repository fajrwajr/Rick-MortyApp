import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import rickandmorty from "../../img/logo.png";
import "../../styles/home.scss";

export const Navba = () => {
	return (
		<header className="header">
			<div className="flex">
				<div className="logo">
					<img src={rickandmorty} />
				</div>
				<Navbar className="menu">
					<Container>
						<Nav>
							<Nav.Link href="#">About</Nav.Link>
							<Nav.Link href="#">Characters</Nav.Link>
							<Nav.Link href="#">Rick</Nav.Link>
							<Nav.Link href="#">Morty</Nav.Link>
						</Nav>
					</Container>
				</Navbar>

				<div className="text">
					<h1>Rick and Morty</h1>
					<p>NO YOURE RIGHT. LETS DO IT THE DUMBEST WAY POSSIBLE BECUASE THATS EASIER FOR YOU - Rick</p>
				</div>
			</div>
		</header>
	);
};
