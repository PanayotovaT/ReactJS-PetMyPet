import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import PetCard from './PetCard';

export const ReptileType = () => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            });
    }, []);

    const dogs = pets.filter(x => x.type === 'Reptile');
    return (
        <ul className="other-pets-list">
            {
                dogs.length > 0
                    ? dogs.map(x => <PetCard key={x._id} pet={x} />)
                    : <p className="no-pets">No reptiles in database!</p>
            }
        </ul>
    );
};

export default ReptileType;