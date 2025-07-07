import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';


const Cards = ({ character }) => {
    const { store, dispatch } = useGlobalReducer()

    return (

        <div className='col-5 mx-4 my-4'>

            <div className="card">
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`}
                    className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">{character.name}</h4>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to={`/character/${character.uid}`}>
                            <button className="btn btn-primary">Learn more!</button>
                        </Link>

                        <i onClick={() => dispatch({ type: 'handleFavorites', payload: character.name })} className="fa-regular fa-heart " style={{ fontSize: '40px' }}></i>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default Cards;