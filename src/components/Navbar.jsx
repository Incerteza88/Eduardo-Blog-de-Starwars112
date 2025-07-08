import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">STARWARS</span>
				</Link>
				<div className="ml-auto">

					<div className="btn-group">
						<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							{store.favorites.length > 0 ? `favoritos: ${store.favorites.length}` : 'Favoritos 0'}
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{
								store.favorites.length > 0 ?
									store.favorites.map(favorite => {
										return (
											<li><p class="dropdown-item">{favorite} {' '} <i onClick={() => dispatch({type: 'handleFavorites', payload: favorite})} class="fa-solid fa-trash"></i> </p></li>
										)
									}) :
									<li><p className="dropdown-item">Agrega un favorito</p></li>
							}

						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};