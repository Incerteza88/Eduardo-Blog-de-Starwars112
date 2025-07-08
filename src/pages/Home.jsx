import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Cards from "../components/Cards.jsx";
import PlanetsStarwars from "../components/PlanetsStarwars.jsx";
import { useEffect } from "react";
import { getPeople, getPlanets } from "../services/api_services.js";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getPeople(dispatch)
		getPlanets(dispatch)
	}, []);

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

			<div className="d-flex overflow-x-scroll gap-2">
				{store.planets.map(planets => {
					return (
						<PlanetsStarwars key={planets.uid} planets={planets} />
					)
				})}
			</div >
		</>
	);
}; 