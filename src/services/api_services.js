

export const getPeople = (dispatch) => {

    fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'setPeople', payload: data.results})
        })
        .catch(err => console.error(err))
}

export const getPlanets = (dispatch) => {

    fetch("https://www.swapi.tech/api/planets/")
        .then(res => res.json())
        .then(data => {
            console.log('planets:', data)
            dispatch({type: 'setPlanets', payload: data.results})
        })
        .catch(err => console.error(err))
}

export const getVehicles = (dispatch) => {

    fetch("https://www.swapi.tech/api/vehicles/")
        .then(res => res.json())
        .then(data => {
            console.log('vehicles:', data)
            dispatch({type: 'setVehicles', payload: data.results})
        })
        .catch(err => console.error(err))
}