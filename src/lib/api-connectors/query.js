import axios from "axios";

/**
 * 
 * @param {Boolean} vote 
 */
export const postVote = async (/** @type Boolean */ vote, /** @type String */ room) => {
    axios.post(`http://queue:8080/queue/store/${room}`, {
        vote: vote
    })
}