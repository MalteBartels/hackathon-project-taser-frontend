const ID = Date.now() * Math.random();

/**
 * 
 * @param Boolean vote 
 */
export const postVote = async (/** @type Boolean */ vote) => {
    const payload = JSON.stringify({ID, vote})
    console.log(payload)
}