import { useState, useEffect, useMemo } from 'react';

import * as petService from '../services/petService';

export const usePetState = (petId) => {
    const [pet, setPet] = useState({likes: []});

    const controller = useMemo(() => {
        const controller = new AbortController();
        return controller;
    },[]);

    useEffect(() => {
        petService.getOne(petId, controller.signal)
            .then(petResult => {
                setPet(petResult);
            });

        return () => {
            controller.abort();
        };
        
    }, [petId, controller]);

    return [
        pet,
        setPet
    ];
};