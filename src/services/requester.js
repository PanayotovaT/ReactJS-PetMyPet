export const request = async (method, url, data) => {

    let result = null;
    if (method === 'GET') {
        result = fetch(url);
    } else {


        result = fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(data)
        });
    };

    return result.then(responseHandler);
};

async function responseHandler(res) {

    let jsonData = await res.json();
    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }

}
const getToken = () => {
    
    try {
        let user = localStorage.getItem('user');
        if(!user) {
            throw {message: 'You must be authenticated'};
        } else {
            return JSON.parse(user).accessToken;
        }
    } catch (err) {
        console.log(err);
    }

};

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');