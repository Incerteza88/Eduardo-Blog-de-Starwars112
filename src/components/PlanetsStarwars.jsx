import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';


const PlanetsStarwars = ({ planets }) => {
    const { store, dispatch } = useGlobalReducer()

    return (

        <div className='col-5 mx-4 my-4'>

            <div className="card">
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${planets.uid}.jpg`}
                    className="card-img-top"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://cdn.dribbble.com/userupload/41776701/file/still-64503eb9e5390adf7fecb8ec4af9f637.gif?resize=400x0';
                    }} />
                <div className="card-body">
                    <h4 className="card-title">{planets.name}</h4>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to={`/character/${planets.uid}`}>
                            <button className="btn btn-primary">Learn more!</button>
                        </Link>

                        <i onClick={() => dispatch({ type: 'handleFavorites', payload: planets.name })} className="fa-regular fa-heart " style={{ fontSize: '40px' }}></i>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default PlanetsStarwars;