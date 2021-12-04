import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.favorites.map(item => {
				return (
					<ul key={item.id}>
						<li>{item.name}</li>
						<li>{item.image}</li>
					</ul>
				);
			})}
		</div>
	);
};
