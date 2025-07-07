import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Cards from "../components/Cards.jsx";
import { useEffect } from "react";
import { getPeople } from "../services/api_services.js";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getPeople(dispatch)
	}, []);
	console.log(store.people)
	return (

		<>
			<h1>Blog de Starwars</h1>
			<div className="d-flex overflow-x-scroll gap-2">
				{store.people.map(character => {
					return (
						<Cards key={character.uid} character={character} />
					)
				})}
			</div>
		</>
	);
}; 