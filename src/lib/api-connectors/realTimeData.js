import axios from "axios";

/**
 * @returns Number[]
 */
export const fetchStats = async (/** @type String */ room) => {
    var data;
    axios.get(`http://realtimedata:8080/stats/${room}`).then((response) => {
        data = JSON.parse(response.data);
        return data;
    })
};