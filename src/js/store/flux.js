const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorite: favorite => {
				const store = getStore();
				if (!store.favorites.some(f => f.id === favorite.id)) {
					setStore({ favorites: [...store.favorites, favorite] });
				}
				console.log("These are the favorites", store.favorites);
			},
			delFavorite: favorite => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(f => f.id !== favorite.id) });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const show = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: show });
			}
		}
	};
};

export default getState;
