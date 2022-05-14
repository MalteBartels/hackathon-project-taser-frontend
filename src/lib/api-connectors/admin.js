const MOCK_ROOMS = ['U38-01.01', 'U38-01.02', 'U38-01.03', 'U38-01.04'];

export const getAllRooms = async () => {
    return MOCK_ROOMS;
}

export const removeRoom = async (/** @type String*/ room) => {
    MOCK_ROOMS.splice(MOCK_ROOMS.indexOf(room), 1);
    return MOCK_ROOMS;
}

export const addRoom = async (/** @type String*/ room) => {
    MOCK_ROOMS.push(room);
    return MOCK_ROOMS;
}