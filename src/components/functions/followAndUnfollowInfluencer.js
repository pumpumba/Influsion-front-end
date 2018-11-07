export const followInfluencer = (userId, influId) => {
    fetch('http://40.127.101.155/db/add_follow_influencer', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ influencer_id: influId, user_id: userId })
    })
}

export const unfollowInfluencer = (userId, influId) => {
    fetch('http://40.127.101.155/db/unfollow_influencer', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ influencer_id: influId, user_id: userId })
    })
}