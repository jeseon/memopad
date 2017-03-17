import axios from 'axios';

export function signup(userid, passwd) {
    return axios.post('/api/account/signup', { userid, passwd })
        .then((response) => {
            "SUCCESS"
        }).catch((error) => {
            "FAILURE"
        });
}