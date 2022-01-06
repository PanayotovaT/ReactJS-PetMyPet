import  { useState, useEffect} from 'react';

const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        //check if exists
        try {
            let item = localStorage.getItem(key);
            return item 
                ? JSON.parse(item) 
                : initialValue;

        }catch(err ) {
            console.log(err);
            return initialValue;
        }
    });

    const setItem = (value) => {
        //save to localStorage
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        } catch(err) {
            console.log(err);
        }
        //save to state
    };

    return [
        state,
        setItem
    ];

};

export default useLocalStorage;