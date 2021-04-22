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

export const updateUserInServer = (user) => {
    console.log('updateUserInServer')
    console.log('user', user)
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: '/api/user',
            data: user,
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

const user1 = {
    Transfer_ID: 111111,
    Transfer_Date: "2000-07-05T00:00:00.0000000",
    New_User: "True",
    First_Name_HEB: "ברק",
    Last_Name_HEB: "שניצל",
    First_Name_ENG: "Barak",
    Last_Name_ENG: "Steindl",
    Display_Name: "מאבטח",
    Original_Domain_ID: 1,
    User_Type_ID: 1,
    Hierarchy: "מזאה/פינת/מאפו",
    User_Profile_ID: 0,
    Blue_ID: "Barak@gmail.com",
    UPN: "Barak@upn.kom",
    Mail: "Barak.WhatAnIdiotIm@India.com",
    Private_Number: 0,
    ID_Number: 1212121212,
    Phone_Number: -4444389,
    Rank_ID: 21,
    BIOPASS: "True",
    Computer_Name: "Viktorija",
    Computer_MAC: "EinGediWater",
    Computer_Site_ID: 2,
    Commander_Name: "Bet-El-Field",
    Commander_Mail: "BetEl@Field.com"
};

updateUserInServer(user1)