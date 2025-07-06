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
            <h2>{character.name} </h2>
            
            <p>Eye color: {character.eye_color}</p>
        </>

    )
}