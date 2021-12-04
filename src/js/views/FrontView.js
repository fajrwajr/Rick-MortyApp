import React from "react";
import Cards from "../component/Cards";
import "../../styles/home.scss";
import useSWR from "swr";
import { Fetcher } from "./Fetcher";
import { Spinner } from "react-bootstrap";

export const FrontView = () => {
	const { data: people, isValidating } = useSWR("/api/character", Fetcher);
	console.log(people);
	return (
		<div className="text-center mt-5">
			{/* this is people */}
			{isValidating &&
				!people && (
					<div>
						<Spinner animation="border" /> <span className="visually-hidden" />
					</div>
				)}
			{people && (
				<div>
					<Cards data={people.results} />
				</div>
			)}
		</div>
	);
};
