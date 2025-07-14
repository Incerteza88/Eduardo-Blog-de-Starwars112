import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';


const Cards = ({ character }) => {
    const { store, dispatch } = useGlobalReducer()

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (store.favorites.includes(character.name)) {
            setIsFavorite(true)
        } else { setIsFavorite(false) }
    }, [store.favorites]);

    return (

        <div className='col-lg-3 col-xl-2 col-md-4 col-sm-6 p-1'>

            <div className="card">
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`}
                    className="card-img-top"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://cdn.dribbble.com/userupload/41776701/file/still-64503eb9e5390adf7fecb8ec4af9f637.gif?resize=400x0';
                    }} />
                <div className="card-body">
                    <h4 className="card-title starwars-font text-center text-truncate">{character.name}</h4>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to={`/character/${character.uid}`}>
                            <button className="btn btn-starwars-blue">Detalles</button>
                        </Link>

                        <i onClick={() => dispatch({ type: 'handleFavorites', payload: character.name })} className={`${isFavorite ? "fa-solid" : "fa-regular"} fa-heart`} style={{ fontSize: '40px' }}></i>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cards;