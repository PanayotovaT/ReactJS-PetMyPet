import { useState, useEffect } from 'react';

import * as petService from '../services/petService';

export const usePetState = (petId) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(petId)
            .then(petResult => {
                setPet(petResult);
            });
    }, [petId]);

    return [
        pet,
        setPet
    ];
};