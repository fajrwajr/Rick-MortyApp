import React, { useContext } from "react";
import { Row, Card, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Cards = props => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row>
				<Link to="/Favorites">
					<span className="btn btn-primary btn-lg">View Favorites</span>
				</Link>
				{props &&
					props.data.map(item => (
						<Col xs={3} key={item.id}>
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={item.image} />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>Click below for more</Card.Text>
									<div>
										<Link to={"/SingleView/" + item.id}>Tactical Information</Link>
									</div>
									{store.favorites.some(f => f.id === item.id) ? (
										<Button onClick={() => actions.delFavorite(item)}>Remove</Button>
									) : (
										<Button onClick={() => actions.addFavorite(item)}>Add</Button>
									)}
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
