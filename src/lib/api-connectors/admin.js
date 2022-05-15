import { ADMIN_API_URL } from "$lib/variables";

/**
 * @returns String[]
 */
export const getAllRooms = async () => {
    const response = await fetch(`${ADMIN_API_URL}/rooms`).then((response) => response.json())
    return response.map((/** @type {{roomId: String}}*/ {roomId}) => roomId)
}

/**
 * @returns String[]
 */
export const removeRoom = async (/** @type String*/ roomNumber) => {
    const response = await fetch(`${ADMIN_API_URL}/room/delete/${encodeURIComponent(roomNumber)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // body data type must match "Content-Type" header
      }).then((response) => response.json());
    return response.map((/** @type {{roomId: String}}*/ {roomId}) => roomId)
}

/**
 * @returns String[]
 */
export const addRoom = async (/** @type String*/ roomNumber) => {
    const response = await fetch(`${ADMIN_API_URL}/room/create/${encodeURIComponent(roomNumber)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // body data type must match "Content-Type" header
      }).then((response) => response.json());
    return response.map((/** @type {{roomId: String}}*/ {roomId}) => roomId)
}