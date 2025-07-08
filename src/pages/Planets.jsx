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
            <h1>Detalles del planeta</h1>
            <h2>{planets.name} </h2>

            <p>Name:{planets.name} </p>
            <p>Climate: {planets.climate}</p>
            <p>Population: {planets.population}</p>
            <p>Orbital Period: {planets.period} </p>
            <p>Rotation Period:{planets.rotation_period} </p>
            <p>Diameter: {planets.diameter}</p>
        </>

    )
}