import React from "react";
import { Row, Card, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cards = props => {
	const getId = item => {
		return item.url.substring(70, item.url.length - 1);
	};
	return (
		<Container>
			<Row>
				{props &&
					props.data.results.map(item => (
						<Col xs={3} key={getId(item)}>
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={item.image} />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>Click below for more</Card.Text>
									<div key={getId(item)}>
										<Link to={"/SingleView/" + getId(item)}>Tactical Information</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default Cards;
Cards.propTypes = {
	data: PropTypes.array.isRequired
};
