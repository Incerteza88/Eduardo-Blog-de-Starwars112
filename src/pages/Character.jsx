import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const Character = () => {
    const { uid } = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCharacter(data.result.properties)
            })
            .catch(err => console.error(err))
    }, [uid]);

    return (
        <>
            <h1>Detalles del personaje</h1>

            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`}></img>

                <h2>{character.name} </h2>
                <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut optio recusandae necessitatibus consequatur. Cupiditate magnam rem, temporibus et recusandae ex repellat delectus, maxime placeat libero modi corrupti sequi numquam voluptatibus.</h6>

                <p>Name:{character.name} </p>
                <p>Birth Year {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                <p>Height: {character.height} </p>
                <p>Skin Color:{character.skin_color} </p>
                <p>Eye color: {character.eye_color}</p>
            </>

            )
}