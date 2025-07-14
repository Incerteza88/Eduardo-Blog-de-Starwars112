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
            <h1 className="starwars-title text-center mt-4 mb-4">Detalles del personaje</h1>

            <div className="d-flex flex-wrap justify-content-center gap-4">
                <img
                    className="character-image"
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${uid}.jpg`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://cdn.dribbble.com/userupload/41776701/file/still-64503eb9e5390adf7fecb8ec4af9f637.gif?resize=400x0';
                    }}
                />

                <div className="character-details col-md-6">
                    <h2 className="starwars-subtitle">{character.name}</h2>
                    <p className="starwars-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi tempore doloremque voluptatem numquam accusamus minima voluptate consequuntur facilis, in neque nihil debitis id animi eaque consequatur nostrum quae. In dignissimos unde inventore distinctio et dolorem. Dolorem eos unde a, alias voluptate rerum dicta tempore perferendis voluptatum, libero sed doloremque?
                    </p>
                </div>
            </div>

            <div className="starwars-info text-light mt-4 text-center">
                <p>Name: {character.name}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                <p>Height: {character.height}</p>
                <p>Skin Color: {character.skin_color}</p>
                <p>Eye Color: {character.eye_color}</p>
            </div>
        </>



    )
}

