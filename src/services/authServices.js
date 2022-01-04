export const login = async (email, password) => {
    const data = {
        email: email,
        password: password
    };

let res  = await fetch('http://localhost:3030/users/login', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let jsonResult = await res.json();
    if(res.ok) {
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
    localStorage.removeItem('username');
};