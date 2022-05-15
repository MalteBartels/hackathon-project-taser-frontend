import { ADMIN_API_URL } from "$lib/variables";

const MOCK_ROOMS = ['U38-01.01', 'U38-01.02', 'U38-01.03', 'U38-01.04'];

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
export const removeRoom = async (/** @type String*/ room) => {
    MOCK_ROOMS.splice(MOCK_ROOMS.indexOf(room), 1);
    return MOCK_ROOMS;
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