import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export const Navba = () => {
	return (
		<Navbar bg="warning" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Welcome to the Citadel</Navbar.Brand>
			</Container>
		</Navbar>
	);
};
