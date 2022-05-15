const MOCK_ROOMS = ['U38-01.01', 'U38-01.02', 'U38-01.03', 'U38-01.04'];

/**
 * @returns String[]
 */
export const getAllRooms = async () => {
    return MOCK_ROOMS;
}

/**
 * @param String room 
 * @returns String[]
 */
export const removeRoom = async (/** @type String*/ room) => {
    MOCK_ROOMS.splice(MOCK_ROOMS.indexOf(room), 1);
    return MOCK_ROOMS;
}

/**
 * @param String room 
 * @returns String[]
 */
export const addRoom = async (/** @type String*/ room) => {
    MOCK_ROOMS.push(room);
    return MOCK_ROOMS;
}