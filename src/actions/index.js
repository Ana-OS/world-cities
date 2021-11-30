// TODO: add and export your own actions
import cities from '../data/cities';

export function setCities() {
    // console.log(cities)
    return {
        type: 'SET_CITIES',
        payload: cities
    }
};


export function selectCity(city) {
    console.log(city)
    return {
        type: 'SELECT_CITY',
        payload: city
    }
}