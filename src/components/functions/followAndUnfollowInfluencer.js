import {BACKEND_URL} from './../../constants'

export const followInfluencer = (userId, influId) => {
    fetch(BACKEND_URL + 'db/add_follow_influencer', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ influencer_id: influId, user_id: userId })
    })
}

export const unfollowInfluencer = (userId, influId) => {
    fetch(BACKEND_URL + 'db/unfollow_influencer', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ influencer_id: influId, user_id: userId })
    })
}