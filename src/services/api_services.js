

export const getPeople = (dispatch) => {

    fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'setPeople', payload: data.results})
        })
        .catch(err => console.error(err))

}

