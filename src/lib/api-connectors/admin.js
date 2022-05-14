import axios from "axios";

/*
 * @returns String[]
 */
export const getAllRooms = async () => {
    axios.get(`http://admin:8080/admin/rooms`).then((response) => {
        return response.data;
    })
}

/**
 * @param {String} room 
 * @returns String[]
 */
export const removeRoom = async (/** @type String*/ room) => {
    axios.post(`http://admin:8080/admin/room/delete/${room}`).then((response) => {
        console.log(response.data);
    })
}

/**
 * @param {String} room 
 * @returns String[]
 */
export const addRoom = async (/** @type String*/ room) => {
    axios.post(`http://admin:8080/admin/room/create/${room}`).then((response) => {
        console.log(response.data);
    })
}