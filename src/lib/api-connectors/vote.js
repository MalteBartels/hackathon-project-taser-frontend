const ID = Date.now() * Math.random();

export const postVote = async (/** @type Boolean */ vote) => {
    console.log({ID, vote})
}