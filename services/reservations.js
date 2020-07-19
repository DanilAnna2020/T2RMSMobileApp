import axios from 'axios';

export function search(searchTerm) {
    return axios.get('https://localhost:44304/api/reservations/?email=' + searchTerm);
}