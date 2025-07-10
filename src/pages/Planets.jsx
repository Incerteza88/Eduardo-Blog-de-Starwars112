import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const Planets = () => {
    const { uid } = useParams()

    const [planets, setPlanets] = useState({})

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlanets(data.result.properties)
            })
            .catch(err => console.error(err))
    }, [uid]);

    return (
        <>
            <h1 className="starwars-title text-center mt-4 mb-4">Detalles del planeta</h1>

            <div className="d-flex flex-wrap justify-content-center gap-4">
                <img
                    className="planet-image"
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${uid}.jpg`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://i.gifer.com/4Q7A.gif"; // fallback opcional
                    }}
                />

                <div className="planet-details col-md-6">
                    <h2 className="starwars-subtitle">{planets.name}</h2>
                    <p className="starwars-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta neque dolore consectetur. Officiis dolores commodi temporibus nisi minima maiores ducimus deleniti libero, sint eligendi obcaecati sit, consequatur, laborum aperiam sequi.
                    </p>
                </div>
            </div>

            <div className="starwars-info text-light mt-4 text-center">
                <p>Name: {planets.name}</p>
                <p>Climate: {planets.climate}</p>
                <p>Population: {planets.population}</p>
                <p>Orbital Period: {planets.orbital_period}</p>
                <p>Rotation Period: {planets.rotation_period}</p>
                <p>Diameter: {planets.diameter}</p>
            </div>
        </>


    )
}