const url = 'http://195.72.146.25/api/v1/cars';

//----------------------------------------------------------------------------------------------------------------------

const saveCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//----------------------------------------------------------------------------------------------------------------------

const deleteCar = (id) => {
    fetch(url + '/' + id, {
        method: 'DELETE',
    });
}

//----------------------------------------------------------------------------------------------------------------------

const patchCar = (id, model, price, year) => {
    fetch(url + '/' + id, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            model: model,
            price: price,
            year: year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//----------------------------------------------------------------------------------------------------------------------

const getCars = () => {

    return fetch(url)
        .then(value => value.json());
}

//----------------------------------------------------------------------------------------------------------------------

export {saveCar, getCars, deleteCar, patchCar};