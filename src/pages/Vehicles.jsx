import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const Vehicles = () => {
    const { uid } = useParams()

    const [vehicles, setVehicles] = useState({})

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVehicles(data.result.properties)
            })
            .catch(err => console.error(err))
    }, [uid]);

    return (
        <>
            <h1 className="starwars-title text-center mt-4 mb-4">Detalles del vehículo</h1>

            <div className="d-flex flex-wrap justify-content-center gap-4">
                <img
                    className="vehicle-image"
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/${uid}.jpg`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://i.gifer.com/4Q7A.gif"; // fallback opcional
                    }}
                />

                <div className="vehicle-details col-md-6">
                    <h2 className="starwars-subtitle">{vehicles.name}</h2>
                    <p className="starwars-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, autem cupiditate fugit distinctio quidem officiis architecto, ad sapiente consequatur sunt eos? Natus, dolores. Excepturi possimus cum, voluptates officiis nulla corrupti. Alias corporis minima et corrupti ratione, enim ipsa sed cum nihil quae rerum molestiae hic numquam animi voluptatem maiores iste quam odit dignissimos sint neque doloremque doloribus commodi. Autem eum doloremque illum impedit neque maiores dolores, mollitia commodi odio ex?
                    </p>
                </div>
            </div>

            <div className="starwars-info text-light mt-4 text-center">
                <p>Name: {vehicles.name}</p>
                <p>Model: {vehicles.model}</p>
                <p>Manufacturer: {vehicles.manufacturer}</p>
                <p>Passengers: {vehicles.passengers}</p>
                <p>Pilots: {vehicles.pilots}</p>
                <p>Max Speed: {vehicles.max_atmosphering_speed}</p>
            </div>
        </>


    )
}