import { useState } from 'react';
import { Link } from 'react-router-dom';
const Cards = ({ character }) => {



    return (

        <div className='col-5'>

            <div className="card">
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <Link to={`/character/${character.uid}`}>
                        <button className="btn btn-primary">Learn more!</button>
                    </Link>

                    <i className="fa-regular fa-heart"></i>

                </div>
            </div>

        </div>
    )
}

export default Cards;