import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = async (userId, petId) => {
    request.post(`${baseUrl}/likes`, {userId, petId});
};

// export const getCount = async(petId) => {
//     const query = encodeURIComponent(`petId="${petId}"`);
//     return request.get(`${baseUrl}/likes?select=_id&where=${query}`)
//         .then(res => res.length);
// };

export const getPetLikes= async(petId) => {
    const query = encodeURIComponent(`petId="${petId}"`);
    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => {
            return res.map(x => x.userId );
        });
};