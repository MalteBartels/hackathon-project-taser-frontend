import { REAL_TIME_API_URL } from "$lib/variables";

let mockIterator = 0;

/**
 * @returns Number[]
 */
export const fetchStats = async (/** @type String */roomNumber) => {
    mockIterator += 1;
    const loadedData = await fetch(`${REAL_TIME_API_URL}/${encodeURIComponent(roomNumber)}`).then((response) => response.json());
    return loadedData.map((/** @type String */ value, /** @type Number*/ index) => ({ time: index, value }));
};