import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Cards from "../components/Cards.jsx";
import PlanetsStarwars from "../components/PlanetsStarwars.jsx";
import { useEffect } from "react";
import { getPeople, getPlanets, getVehicles } from "../services/api_services.js";
import VehiclesStarwars from "../components/VehiclesStarwars.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getPeople(dispatch)
		getPlanets(dispatch)
		getVehicles(dispatch)
	}, []);

	return (

		<>
			<h2 className="mt-3 text-center">Personajes</h2>

			<div className="d-flex overflow-x-scroll gap-2">
				{store.people.map(character => {
					return (
						<Cards key={character.uid} character={character} />
					)
				})}

			</div>

			<h2 className="mt-3 text-center">Planetas</h2>
			<div className="d-flex overflow-x-scroll gap-2">
				{store.planets.map(planets => {
					return (
						<PlanetsStarwars key={planets.uid} planets={planets} />
					)
				})}
			</div >

			<h2 className="mt-3 text-center">Vehículos</h2>
			<div className="d-flex overflow-x-scroll gap-2">
				{store.vehicles.map(vehicles => {
					return (
						<VehiclesStarwars key={vehicles.uid} vehicles={vehicles} />
					)
				})}
			</div >
		</>
	);
}; 