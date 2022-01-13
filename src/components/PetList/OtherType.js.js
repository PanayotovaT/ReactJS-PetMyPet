import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import PetCard from './PetCard';

export const OtherType = () => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            });
    }, []);

    const dogs = pets.filter(x => x.type === 'Other');
    return (
        <ul className="other-pets-list">
            {
                dogs.length > 0
                    ? dogs.map(x => <PetCard key={x._id} pet={x} />)
                    : <p className="no-pets">No animals in database!</p>
            }
        </ul>
    );
};

export default OtherType;