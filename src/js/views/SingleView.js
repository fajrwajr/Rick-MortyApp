import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Fetcher } from "./Fetcher";
import useSWR from "swr";
import "../../styles/index.scss";

export const SingleView = props => {
	const params = useParams();
	const { data: people, isValidating } = useSWR(`/api/character/${params.id}`, Fetcher);
	console.log(people);

	if (people && people.status === "Alive") {
		return (
			<>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mt-3">
							<div className="card">
								<div className="card-horizontal">
									<div className="img-square-wrapper">
										<img className="" src={people && people.image} alt="Card image cap" />
									</div>
									<div className="card-body-space">
										<h4 className="card-title-border">
											<li />
											<b>
												{people && people.status} - {people && people.species}
											</b>
										</h4>
										<p className="card-text">Last Seen: {people && people.location.name}</p>
									</div>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 4 years ago</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Go Back
					</span>
				</Link>
			</>
		);
	} else {
		return (
			<>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mt-3">
							<div className="card">
								<div className="card-horizontal">
									<div className="img-square-wrapper">
										<img className="" src={people && people.image} alt="Card image cap" />
									</div>
									<div className="card-body-space">
										<h4 className="card-title-border">
											<li className="red" />
											<b>
												{people && people.status} - {people && people.species}{" "}
											</b>
										</h4>
										<p className="card-text">Last Seen: {people && people.location.name}</p>
									</div>
								</div>
								<div className="card-footer">
									<small className="text-muted">Last updated 4 years ago</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Go Back
					</span>
				</Link>
			</>
		);
	}
};

SingleView.propTypes = {
	match: PropTypes.object
};
