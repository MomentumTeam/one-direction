import axios from "axios";

export const getUserFromServer = () => {
    console.log('getUserFromServer');
    return new Promise((resolve, reject) => {
        axios(`/api/user`)
            .then((res) => {
                console.log('res', res.data);
                resolve(res.data);
            })
            .catch((err) => { console.log('err', err); reject(err) });
    });
};

export const updateUserInServer = (changes) => {
    console.log('updateUserInServer')
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: '/api/user',
            data: changes,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log('response', response)
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error);
            });
    });
};
