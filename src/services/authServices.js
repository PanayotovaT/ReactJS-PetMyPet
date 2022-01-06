const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    const data = {
        email: email,
        password: password
    };

    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = async (email, password) => {
    const data = {
        email: email,
        password: password
    };

    let res = await fetch(`${baseUrl}/users/register`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};

export const logout = () => {
    fetch(`${baseUrl}/users/logout`);
};