import { QUEUE_API_URL } from "$lib/variables";

const ID = Date.now() * Math.random();

/**
 * Post a vote to the queue of the current room
 */
export const postVote = async (/** @type Boolean */ vote, /**@type String */ roomNumber) => {
    const payload = JSON.stringify({vote})
    
    const response = await fetch(`${QUEUE_API_URL}/store/${encodeURIComponent(roomNumber)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload // body data type must match "Content-Type" header
      });

    return response.json();
}