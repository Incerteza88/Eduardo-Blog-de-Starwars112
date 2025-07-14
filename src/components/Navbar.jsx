import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-dark bg-dark starwars-navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 starwars-logo">STARWARS</span>
				</Link>
				<div className="ml-auto">

					<div className="btn-group">

						<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							{store.favorites.length > 0 ? `Favoritos: ${store.favorites.length}` : 'Favoritos 0'}
						</button>

						<ul className="dropdown-menu starwars-dropdown">
							{store.favorites.length === 0 ? (
								<li className="dropdown-item starwars-font">No hay favoritos</li>
							) : (
								store.favorites.map((favorite, index) => (
									<li key={index}>
										<div className="dropdown-item d-flex justify-content-between align-items-center starwars-font">
											{favorite}
											<i
												className="fa-solid fa-trash text-danger m-1"
												onClick={() => dispatch({ type: 'handleFavorites', payload: favorite })}
												style={{ cursor: 'pointer' }}
											></i>
										</div>
									</li>
								))
							)}
						</ul>

					</div>
				</div>
			</div>
		</nav>
	);
};