import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import PetCard from './PetCard';

export const CatType = () => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            });
    }, []);

    const cats = pets.filter(x => x.type === 'cat');
    return (
        <ul className="other-pets-list">
            {
                cats.length > 0
                    ? cats.map(x => <PetCard key={x._id} pet={x} />)
                    : <p className="no-pets">No cats in database!</p>
            }
        </ul>
    );
};

export default CatType;